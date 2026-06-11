import { Clock, Settings, User } from "lucide-react";

export const SettingsBar = () => {
  return (
    <header className="flex w-full h-14 justify-end border-b border-border/40 px-6 bg-background shrink-0">
      <div className="flex items-center gap-4 text-muted-foreground">
        <Clock className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
        <Settings className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
        <div className="h-8 w-8 rounded-full bg-muted border border-border flex items-center justify-center cursor-pointer overflow-hidden">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}
