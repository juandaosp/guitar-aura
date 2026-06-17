import { Clock, Settings, User } from 'lucide-react'

export const SettingsBar = () => {
  return (
    <header className="border-border/40 bg-background flex h-14 w-full shrink-0 justify-end border-b px-6">
      <div className="text-muted-foreground flex items-center gap-4">
        <Clock className="hover:text-primary h-5 w-5 cursor-pointer transition-colors" />
        <Settings className="hover:text-primary h-5 w-5 cursor-pointer transition-colors" />
        <div className="bg-muted border-border flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  )
}
