import type { RouteObject } from "react-router-dom";

const routes: RouteObject = {
  path: "payment",
  lazy: async () => {
    const { PaymentPage } = await import("../pages/Payment.page");
    return {
      Component: PaymentPage,
    };
  },
};

export default routes;
