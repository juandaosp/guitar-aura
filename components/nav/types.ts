type Icon = "LayoutDashboard" | "Zap" | "Disc" | "BookOpen" | "Music" | "History" | "LifeBuoy";

export interface NavElement {
  label: string;
  url: string;
  icon: Icon;
  isActive: boolean;
}

export interface NavGroup {
  groupLabel: string;
  elements: NavElement[];
}
