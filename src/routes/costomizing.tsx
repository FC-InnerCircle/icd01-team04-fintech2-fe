import type { RouteObject } from "react-router-dom";

const routes: RouteObject = {
  path: "costomizing",
  lazy: async () => {
    const { Costomizing } = await import("../pages/costomizing/page");
    return {
      Component: Costomizing,
    };
  },
};

export default routes;
