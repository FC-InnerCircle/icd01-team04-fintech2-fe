import type { RouteObject } from "react-router-dom";

const MemberAcceptRoute: RouteObject = {
  path: "memberAccept",
  lazy: async () => {
    const { MemberAccept } = await import("../pages/memberAccept/page");
    return {
      Component: MemberAccept,
    };
  },
};

export default MemberAcceptRoute;
