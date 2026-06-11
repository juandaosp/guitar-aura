import {
  Sidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Zap,
  Disc,
  BookOpen,
  Music,
  History,
  LifeBuoy,
} from "lucide-react";
import { SideNavbarContent } from "./side-navbar-content";
import { SideNavbarFooter } from "./side-navbar-footer";
import { useNavStore } from "@/store/nav/use-nav-store";
import { SideNavbarHeader } from "./side-navbar-header";


export const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="h-4 w-4" />,
  Zap: <Zap className="h-4 w-4" />,
  Disc: <Disc className="h-4 w-4" />,
  BookOpen: <BookOpen className="h-4 w-4" />,
  Music: <Music className="h-4 w-4" />,
  History: <History className="h-4 w-4" />,
  LifeBuoy: <LifeBuoy className="h-4 w-4" />,
}

export const SideNavbar = () => {
  const navGroups = useNavStore((state) => state.navGroups);
  const appName = "GUITAR AURA"
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SideNavbarHeader appName={appName} />
      <SideNavbarContent navGroups={navGroups} />
      <SideNavbarFooter />
    </Sidebar>
  );
}
