import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ArrowUpRight } from "lucide-react";
import { ModeToggle } from "@/components/ui/light-dark";
import Link from 'next/link'


const Navbar03Page = () => {
  return (
    <div className="bg-muted">
      <nav className="z-50 fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Link href="/"><Logo /></Link>
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            
            <Button className="rounded-full">Get Started</Button>
            <ModeToggle />

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
