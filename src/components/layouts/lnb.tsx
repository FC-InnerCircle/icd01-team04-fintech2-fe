import { CUSTOMER_NAV } from "@/routes/nav";
import { NavLink } from "react-router-dom";
import { UserCombobox } from "../auth/user-combobox";
import { NavItem } from "../ui/nav-item";

export function LNB() {
  return (
    <div className="h-full hidden border-r md:flex md:flex-col">
      <div className="border-b px-2 py-2">
        <UserCombobox />
      </div>

      <div className="flex-1 grid grid-cols-1">
        <nav className="py-2 border-b">
          <h3 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">
            Customer Menu
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

        <nav className="py-2 border-b">
          <h3 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">
            System Menu
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
