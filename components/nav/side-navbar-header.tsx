import { SidebarHeader } from "@/components/ui/sidebar";
import Link from "next/link";

interface SideNavbarHeaderProps {
    appName: string;
}

export const SideNavbarHeader = ({ appName }: SideNavbarHeaderProps) => {
    return (
        <SidebarHeader className="flex justify-center items-center w-full p-4 border-b border-border/20 h-14">
            <span className="font-mono font-medium text-primary tracking-[3.4px] text-xl">
                <Link href="/">{appName}</Link>
            </span>
        </SidebarHeader>
    )
}
