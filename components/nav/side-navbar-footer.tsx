import { SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { ICON_MAP } from "./side-navbar"

export const SideNavbarFooter = () => {
    return (
        <SidebarFooter className="p-4 border-t border-border/10">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="sm" className="text-muted-foreground">
                        {ICON_MAP["LifeBuoy"]}
                        <span>Soporte</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    )
}