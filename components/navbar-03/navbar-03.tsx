import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ArrowUpRight } from "lucide-react";


const Navbar03Page = () => {
  return (
    <div className="bg-muted">
      <nav className="fixed z-50 bg-white top-6 inset-x-4 h-16 border dark:border-slate-700/70 max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8 rounded-full ">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            
            <Button className="rounded-full">Get Started</Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar03Page;
