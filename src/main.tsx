import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { enableMocking } from "./lib/msw/index.ts";

enableMocking().then(() => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
