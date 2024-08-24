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
  {
    path: "/memberaccept",
    lazy: async () => {
      const { MemberAccept } = await import("../pages/memberAccept/page");
      return {
        Component: MemberAccept,
      };
    },
  },
]);
