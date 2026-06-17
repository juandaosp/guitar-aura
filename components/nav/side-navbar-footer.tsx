import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { ICON_MAP } from './constants'

export const SideNavbarFooter = () => {
  return (
    <SidebarFooter className="border-border/10 border-t p-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="sm" className="text-muted-foreground">
            {ICON_MAP['LifeBuoy']}
            <span>Soporte</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}
