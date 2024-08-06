import { Pencil } from "lucide-react";

export function AppBar() {
  return (
    <header className="flex items-center  justify-between bg-background px-4 py-3 shadow-sm sm:px-6 bg-gradient-to-r from-stone-900 to-blue-950 text-white">
      <div className="flex items-center gap-4">
        <a href="\" className="flex items-center gap-2">
          <span className="text-2xl font-bold inline-block">HireMe</span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://twitter.com/intent/follow?screen_name=mun_err"
          className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
            <Pencil className="mr-2 h-4 w-4" />  
            <span className="hidden md:inline-block">Write A Post</span>
            
          </a>
        </div>
    </header>
  );
}