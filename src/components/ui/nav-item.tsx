import type { LucideIcon } from "lucide-react";
import { Button } from "./button";

interface NavItemProps {
  label: string;
  IconComponent: LucideIcon;
  isActive: boolean;
}

export function NavItem({ IconComponent, isActive, label }: NavItemProps) {
  return (
    <Button
      asChild
      variant={"secondary"}
      className={`w-full justify-start 
        text-sm font-medium
        hover:bg-zinc-800 hover:text-white
        ${isActive ? "bg-zinc-800 text-white" : ""}`}
    >
      <span>
        <IconComponent size={20} className="mr-3" />
        {label}
      </span>
    </Button>
  );
}
