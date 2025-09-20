import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TreePine, User, Settings, LogOut } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 bg-primary text-primary-foreground border-b border-border">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-3">
          <TreePine className="h-8 w-8" />
          <h1 className="text-xl font-semibold">AI-Powered FRA Atlas & DSS</h1>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:bg-primary-foreground/10">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/user-avatar.jpg" alt="User" />
                <AvatarFallback className="bg-primary-foreground text-primary">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Forest Officer</p>
                <p className="text-xs leading-none text-muted-foreground">officer@fra.gov.in</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
