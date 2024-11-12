import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ModeToggle } from "./Theme-btn";

export default function Navbar() {
  const NavStyle = cva(
    "text-base font-bold group inline-flex h-10 w-max items-center justify-center px-4 py-2 transition-transform duration-300 relative after:content-[''] after:absolute after:left-3 after:bottom-0 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-500 hover:after:w-4/5  disabled:pointer-events-none disabled:opacity-50"
  );
  const LinkStyle = cva(
    "  block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
  );

  return (
    <nav className="top-0 sticky backdrop-blur selection:bg-transparent z-50 font-poppins text-white">
      <div className="mx-auto px-4 py-1 flex  justify-between items-center">
        <Link
          href="/"
          className="hidden font-dancingScript md:flex ml-28 text-3xl font-bold "
        >
          EventCraft
        </Link>
        <Link
          href="/"
          className="md:hidden font-dancingScript ml-4 text-3xl font-bold"
        >
          EventCraft
        </Link>
        <div
          className="hidden md:flex mr-4 space-x-8 items-center"
          id="nav-links"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/services">
                  <NavigationMenuTrigger className="text-base font-bold transition-transform duration-300 relative after:content-[''] after:absolute after:left-3 after:bottom-0 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-500 hover:after:w-4/5">
                    SERVICES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[450px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Unique Event Experiences
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Craft unforgettable moments with our diverse range
                              of services
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            className={cn(LinkStyle())}
                            href="/services/tattoo-artists"
                          >
                            <div className="text-sm font-medium leading-none">
                              Tattoo Artists
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Professional artists for unique event tattoos
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            className={cn(LinkStyle())}
                            href="/services/games"
                          >
                            <div className="text-sm font-medium leading-none">
                              Games
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Interactive games to entertain your guests
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            className={cn(LinkStyle())}
                            href="/services/sketch-artists"
                          >
                            <div className="text-sm font-medium leading-none">
                              Sketch Artists
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Talented artists to capture moments in sketches
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/packages" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(NavStyle())}>
                    PACKAGES
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(NavStyle())}>
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(NavStyle())}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* <ModeToggle/> */}
        </div>
        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="bg-background selection:bg-transparent ">
              <SheetHeader className="flex justify-center mt-10 items-center text-3xl">
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/">
                      <span className="font-bold text-4xl bg-clip-text text-transparent font-dancingScript bg-gradient-to-b from-purple-400 to-pink-600 cursor-pointer">
                        EventCraft
                      </span>
                    </Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <SheetClose></SheetClose>
              <div className="flex flex-col justify-center mt-6 items-center">
                <Link href="/services">
                  <SheetClose asChild>
                    <span className="block font-bold text-1xl py-2 px cursor-pointer">
                      Services
                    </span>
                  </SheetClose>
                </Link>
                <Link href="/packages">
                  <SheetClose asChild>
                    <span className="block font-bold text-1xl py-2 px-4 cursor-pointer">
                      Packages
                    </span>
                  </SheetClose>
                </Link>
                <Link href="/gallery">
                  <SheetClose asChild>
                    <span className="block font-bold text-1xl py-2 px-4 cursor-pointer">
                      Gallery
                    </span>
                  </SheetClose>
                </Link>
                <Link href="/about">
                  <SheetClose asChild>
                    <span className="block font-bold text-1xl py-2 px-4 cursor-pointer">
                      About Us
                    </span>
                  </SheetClose>
                </Link>
              </div>
              <SheetFooter>
                <div className="mx-auto font-poppins mt-52 py-4 justify-center items-center">
                  <p className="text-sm justify-center text-center">
                    &copy; 2024 EventCraft. All rights reserved.
                  </p>
                  <div className="flex items-center justify-center space-x-8 py-8">
                    <a
                      href="https://github.com/Byte-Vortex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/bytevortex/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://x.com/Byte_Vortex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
