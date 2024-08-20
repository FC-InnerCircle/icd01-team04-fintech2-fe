/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCK_WORKER_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
