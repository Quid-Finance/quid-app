"use client";

import {
  HomeIcon,
  BarChart3Icon,
  PiggyBankIcon,
  CreditCardIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AddTransactionBottomNavEntry, BaseBottomNavEntry, BottomNavEntry } from "@/lib/nav/bottom-nav-entries";
import { AddTransactionModal } from "@/components/shared/add-transaction-modal";

export const BottomNav = () => {
  const pathname = usePathname();
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  const routes: BottomNavEntry[] = [
    {
      kind: "base-entry",
      href: "/",
      label: "Home",
      icon: HomeIcon,
      active: pathname === "/",
    },
    {
      kind: "base-entry",
      href: "/transactions",
      label: "Transactions",
      icon: CreditCardIcon,
      active: pathname === "/transactions",
    },
    {
      kind: "add-transaction-entry",
      href: "#",
      label: "Add",
      icon: PlusIcon,
      onClick: () => setIsAddTransactionOpen(true),
    },
    {
      kind: "base-entry",
      href: "/budget",
      label: "Budget",
      icon: PiggyBankIcon,
      active: pathname === "/budget",
    },
    {
      kind: "base-entry",
      href: "/analytics",
      label: "Analytics",
      icon: BarChart3Icon,
      active: pathname === "/analytics",
    },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
        <div className="max-w-md mx-auto px-4">
          <nav className="flex justify-between items-center h-16">
            {routes.map((route) => (
              <NavItem key={route.label} {...route} />
            ))}
          </nav>
        </div>
      </div>


      <AddTransactionModal isOpen={isAddTransactionOpen} setIsOpen={setIsAddTransactionOpen} />
    </>
  );
};

const NavItem = (entry: BottomNavEntry) => {
  switch (entry.kind) {
    case 'base-entry':
      return <BaseNavItem {...entry} />
    case "add-transaction-entry":
      return <AddTransactionButton {...entry} />
    default:
      return <></>
  }
};

const BaseNavItem = (entry: BaseBottomNavEntry) => {
  const Icon = entry.icon

  return (
    <Link href={entry.href} className="focus:outline-none">
      <div
        className={cn(
          "flex flex-col items-center justify-center w-16 py-1",
          entry.active ? "text-primary" : "text-muted-foreground",
        )}
      >
        <Icon className={cn("w-5 h-5", entry.active && "text-primary")} />
        <span className="text-xs mt-1">{entry.label}</span>
      </div>
    </Link>
  );
}

const AddTransactionButton = (entry: AddTransactionBottomNavEntry) => {
  const Icon = entry.icon

  return (
    <button onClick={entry.onClick} className="focus:outline-none">
      <div
        className={cn(
          "flex flex-col items-center justify-center w-16 py-1",
        )}
      >
        <div
          className={
            "flex items-center justify-center w-12 h-12 rounded-full transition-transform hover:scale-105 bg-primary text-white"
          }
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </button>
  );
}

