import type { RouteObject } from "react-router-dom";

const KeyIssuanceRoute: RouteObject = {
  path: "keyIssuance",
  lazy: async () => {
    const { KeyIssuance } = await import("../pages/keyIssuance/page");
    return {
      Component: KeyIssuance,
    };
  },
};

export default KeyIssuanceRoute;
