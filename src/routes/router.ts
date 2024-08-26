import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    lazy: async () => {
      const { DefaultLayout } = await import(
        "../components/layouts/default-layout"
      );
      return {
        Component: DefaultLayout,
      };
    },
    children: [
      {
        path: "/",
        lazy: async () => {
          const { Homepage } = await import("../pages/Home.page");
          return {
            Component: Homepage,
          };
        },
      },
    ],
  },
]);
