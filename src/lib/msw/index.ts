export async function enableMocking() {
  if (import.meta.env.VITE_MOCK_WORKER_ENABLED !== "true") {
    return;
  }

  const { worker } = await import("../../mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
