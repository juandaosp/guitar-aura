import type { NavGroup } from "./types"
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip";
import { ICON_MAP } from "./side-navbar";
import Link from "next/link";

interface SideNavbarContentProps {
    navGroups: NavGroup[];
}

export const SideNavbarContent = ({ navGroups }: SideNavbarContentProps) => {
    return (
        <SidebarContent>
            {navGroups && navGroups.length > 0 &&

                navGroups.map((group, index) => (
                    <SidebarGroup key={`${group.groupLabel}-${index}`}>
                        <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>
                        <SidebarMenu>
                            {group.elements.map((element, index) => (
                                <SidebarMenuItem key={`${element.label}-${index}`}>
                                    <Link href={element.url}>
                                        <TooltipProvider>
                                            <SidebarMenuButton tooltip={element.label} isActive={element.isActive}>
                                                {ICON_MAP[element.icon]}
                                                <span>{element.label}</span>
                                            </SidebarMenuButton>
                                        </TooltipProvider>
                                    </Link>

                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                ))

            }
        </SidebarContent>
    )
}