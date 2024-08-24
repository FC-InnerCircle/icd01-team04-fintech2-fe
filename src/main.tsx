import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { enableMocking } from "./lib/msw/index.ts";
import { router } from "./routes";

import "./index.css";

enableMocking().then(() => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
