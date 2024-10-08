import {
  ChartSplineIcon,
  CreditCardIcon,
  KeyRound,
  type LucideIcon,
  UserCog,
} from "lucide-react";

interface NavItem {
  label: string;
  IconComponent: LucideIcon;
  path: string;
}

export const MANAGE_NAV: NavItem[] = [
  {
    label: "고객 관리",
    IconComponent: UserCog,
    path: "/memberAccept",
  },
  // {
  //   label: "API 관리",
  //   IconComponent: IdCardIcon,
  //   path: "/api",
  // },
];

export const CUSTOMER_NAV: NavItem[] = [
  {
    label: "결제대시보드",
    IconComponent: ChartSplineIcon,
    path: "/payment",
  },
  {
    label: "키 발급 관리",
    IconComponent: KeyRound,
    path: "/keyIssuance",
  },
  {
    label: "결제내역",
    IconComponent: CreditCardIcon,
    path: "/payment/history",
  },
  // {
  //   label: "홈",
  //   IconComponent: HomeIcon,
  //   path: "/",
  // },
  // {
  //   label: "API 관리",
  //   IconComponent: IdCardIcon,
  //   path: "/api",
  // },
  // {
  //   label: "일별매출",
  //   IconComponent: CalendarDaysIcon,
  //   path: "/payment/daily",
  // },
];
