"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  Folder, 
  MessageSquare,
  Users,
  Settings,
  Menu
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: LayoutDashboard
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package
  },
  {
    title: "Blog Posts",
    href: "/admin/posts",
    icon: FileText
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: Folder
  },
  {
    title: "Inquiries",
    href: "/admin/inquiries",
    icon: MessageSquare
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings
  }
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center border-b px-6">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] px-3 py-2">
          <nav className="space-y-1">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                  pathname === item.href ? "bg-accent" : "transparent"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <div className={cn(
        "flex-1 transition-all",
        isSidebarOpen ? "ml-64" : "ml-0"
      )}>
        <header className="sticky top-0 z-30 border-b bg-background">
          <div className="flex h-16 items-center gap-4 px-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}