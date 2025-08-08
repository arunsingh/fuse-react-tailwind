export async function enableMocks() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('../mocks/browser')
    await worker.start({ serviceWorker: { url: '/mockServiceWorker.js' } })
  }
}


