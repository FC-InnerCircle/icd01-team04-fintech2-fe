import { CUSTOMER_NAV } from "@/routes/nav";
import { NavLink } from "react-router-dom";
import { UserCombobox } from "../auth/user-combobox";
import { NavItem } from "../ui/nav-item";

export function LNB() {
  return (
    <div className="h-full hidden md:block border-zinc-300 border">
      <div className="border-b border-zinc-300 px-2 py-4">
        <UserCombobox />
      </div>

      <nav className="py-2 border-b border-zinc-300">
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
  );
}
