import React from 'react'
import SideBarItem from './sidebar-item'
import { PenTool, LayoutDashboard, HeartPulse, Settings } from "lucide-react";

const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Study Music",
    href: "/studymusic",
    icon: PenTool,
  },
  {
    name: "Meditation",
    href: "/meditation",
    icon: HeartPulse,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },

];

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col w-full gap-y-2">
      {routes.map((route, index) => (
        <SideBarItem
          key={index}
          path={route.href}
          name={route.name}
          icon={route.icon}
        />
      ))}
    </div>
  )
}