import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { Homepage } = await import("../pages/Home.page");
      return {
        Component: Homepage,
      };
    },
  },
]);
