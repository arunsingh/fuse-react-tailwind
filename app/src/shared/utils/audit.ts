type AuditEvent = {
  type: 'nav' | 'auth' | 'crud'
  action: string
  details?: unknown
  timestamp: number
}

const queue: AuditEvent[] = []

export function audit(event: Omit<AuditEvent, 'timestamp'>) {
  queue.push({ ...event, timestamp: Date.now() })
}

export async function flushAudit() {
  if (queue.length === 0) return
  const payload = [...queue]
  queue.length = 0
  try {
    await fetch('/api/audit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  } catch {
    // requeue on failure (best-effort)
    queue.unshift(...payload)
  }
}


