import { Sidebar } from "@/components/ui/sidebar";
import { SideNavbarContent } from "./side-navbar-content";
import { SideNavbarFooter } from "./side-navbar-footer";
import { useNavStore } from "@/store/nav/use-nav-store";
import { SideNavbarHeader } from "./side-navbar-header";

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
