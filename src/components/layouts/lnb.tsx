import { CUSTOMER_NAV, MANAGE_NAV } from "@/routes/nav";
import { LoginStatus } from "@/states/store";
import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { UserCombobox } from "../auth/user-combobox";
import { NavItem } from "../ui/nav-item";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function LNB() {
  const [loginInfo, setLoginInfo] = useAtom(LoginStatus);
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오는 훅

  useEffect(() => {
    if (loginInfo.isLoggedIn === false) {
      navigate("/login");
    }
  }, [loginInfo.isLoggedIn, navigate]);
  return (
    <div className="h-full hidden border-r md:flex md:flex-col">
      <div className="border-b px-2 py-2 h-[53px]">
        {loginInfo?.roll === "superUser" && <UserCombobox />}
      </div>

      <div className="flex-1 grid grid-cols-1">
        {loginInfo?.roll === "superUser" && (
          <nav className={"py-2"}>
            <h3 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">
              관리자 메뉴
            </h3>
            <ul className="space-y-2 px-2">
              {MANAGE_NAV.map((navItem) => {
                return (
                  <li key={navItem.label} className="space-y-1">
                    <NavLink to={navItem.path}>
                      {({ isActive }) => {
                        return (
                          <NavItem
                            IconComponent={navItem.IconComponent}
                            isActive={isActive}
                            label={navItem.label}
                          />
                        );
                      }}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        <nav className="py-2 border-b">
          <h3 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">
            상점주 메뉴{" "}
          </h3>
          <ul className="space-y-2 px-2">
            {CUSTOMER_NAV.map((navItem) => {
              return (
                <li key={navItem.label} className="space-y-1">
                  <NavLink to={navItem.path}>
                    {({ isActive }) => {
                      return (
                        <NavItem
                          IconComponent={navItem.IconComponent}
                          isActive={isActive}
                          label={navItem.label}
                        />
                      );
                    }}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
