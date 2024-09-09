import { createBrowserRouter } from "react-router-dom";
import costomizing from "./costomizing";
import KeyIssuanceRoute from "./keyIssuance";
import MemberAcceptRoute from "./memeberAcceptRoute";
import payment from "./payment";

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
      costomizing,
      payment,
      MemberAcceptRoute,
      KeyIssuanceRoute,
    ],
  },
  {
    path: "/login",
    lazy: async () => {
      const { Login } = await import("../pages/login/page");
      return {
        Component: Login,
      };
    },
  },
  {
    path: "/signup",
    lazy: async () => {
      const { Signup } = await import("../pages/signup/page");
      return {
        Component: Signup,
      };
    },
  },
]);
