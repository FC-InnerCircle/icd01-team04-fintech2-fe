import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { enableMocking } from "./lib/msw/index.ts";

import "./index.css";
import { App } from "./App.tsx";

enableMocking().then(() => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
