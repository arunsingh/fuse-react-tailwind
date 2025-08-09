export type Role = 'admin' | 'manager' | 'user'

export function hasRole(userRole: Role | undefined, minRole: Role): boolean {
  const order: Role[] = ['user', 'manager', 'admin']
  const current = userRole ? order.indexOf(userRole) : -1
  return current >= order.indexOf(minRole)
}

export function can(action: string, role: Role): boolean {
  const permissions: Record<Role, string[]> = {
    admin: ['*'],
    manager: ['read', 'write', 'invite'],
    user: ['read'],
  }
  return permissions[role]?.includes('*') || permissions[role]?.includes(action) || false
}


