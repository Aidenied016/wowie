import Link from "next/link";
import Image from "next/image";
import {
  Home,
  LineChart,
  Package,
  Settings,
  Users2,
  ActivityIcon,
  PackagePlus,
  KeyboardIcon,
  Droplets,
  InboxIcon,
  FilePlusIcon,
  HomeIcon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const menu = [
  "Dashboard",
  "Activity",
  "Assets",
  "Users",
  "Analytics",
  "License",
  "Accessories",
  "Consumables",
  "Component",
  "Settings",
];

import React from "react";

export default function Side() {
  return (
    <div className="flex h-full">
      <aside className="absolute inset-y-16 left-0 z-10 hidden w-14 h-full flex-col bg-background sm:flex bg-yellow-300">
        <nav className="flex flex-col items-center gap-4  ">
          {menu.map((menu: string, index: number) => {
            return (
              <div key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`/${menu.toLowerCase()}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        {menu === "Dashboard" && (
                          <HomeIcon className="h-5 w-5" />
                        )}
                        {menu === "Activity" && (
                          <ActivityIcon className="h-5 w-5" />
                        )}
                        {menu === "Assets" && <Package className="h-5 w-5" />}
                        {menu === "Users" && <Users2 className="h-5 w-5" />}
                        {menu === "Analytics" && (
                          <LineChart className="h-5 w-5" />
                        )}
                        {menu === "License" && (
                          <FilePlusIcon className="h-5 w-5" />
                        )}
                        {menu === "Accessories" && (
                          <KeyboardIcon className="h-5 w-5" />
                        )}
                        {menu === "Consumables" && (
                          <Droplets className="h-5 w-5" />
                        )}
                        {menu === "Component" &&  (
                          <InboxIcon className="h-5 w-5" />
                        )}
                        {menu === "Settings" && (
                          <Settings className="h-5 w-5" />
                        )}
                        <span className="sr-only">{menu}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{menu}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
