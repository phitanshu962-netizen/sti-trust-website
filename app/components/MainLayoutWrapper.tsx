"use client";

import { usePathname } from "next/navigation";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define paths that should NOT have sidebars
  const noSidebarPaths = [
    "/courses",
    "/admin-login",
    "/atc-login",
    "/institute-login",
    "/admin",
    "/partners",
  ];

  // Check if current path matches or starts with any of the noSidebarPaths
  const hideSidebars = noSidebarPaths.some(
    (path) => pathname === path || pathname?.startsWith(`${path}/`)
  );

  if (hideSidebars) {
    return (
      <div className="flex flex-col lg:flex-row gap-5 p-4 md:p-5 flex-grow">
        <main className="flex-1 w-full min-w-0">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-5 p-4 md:p-5 flex-grow">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-[260px] flex-shrink-0">
        <SidebarLeft />
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0">{children}</main>

      {/* Right Sidebar */}
      <aside className="w-full lg:w-[260px] flex-shrink-0">
        <SidebarRight />
      </aside>
    </div>
  );
}
