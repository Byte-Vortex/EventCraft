import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
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
  const NavmdStyle = cva(
    "text-base font-bold group inline-flex h-10 w-max items-center justify-center px-4 py-2 disabled:pointer-events-none disabled:opacity-50"
  );
  const LinkStyle = cva(
    "  block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
  );

  return (
    <nav className="top-0 sticky backdrop-blur selection:bg-transparent z-50">
      <div className="mx-auto px-4 py-2 flex  justify-between items-center">
        <Link href="/" className="hidden md:flex ml-10 text-2xl font-bold text-white">
          EventCraft
        </Link>
        <Link href="/" className="md:hidden text-2xl font-bold text-white">
          EventCraft
        </Link>
        <div className="hidden md:flex mr-4 space-x-8 items-center" id="nav-links">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-bold transition-transform duration-300 relative after:content-[''] after:absolute after:left-3 after:bottom-0 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-500 hover:after:w-4/5">
                  Services
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
                          href="/services/tatoo-artists"
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
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/packages" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(NavStyle())}>
                    Packages
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
          <ModeToggle/>
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
              <SheetHeader className="flex justify-center mt-8 mb-2 items-center text-3xl">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-pink-600">EventCraft</span>
                </div>
              </SheetHeader>

              <div className="flex flex-col justify-center mt-6 items-center">
              <NavigationMenu className="mb-8">
            <NavigationMenuList className="flex flex-col space-y-2 justify-center items-center">
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(NavmdStyle())}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/packages" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(NavmdStyle())}>
                    Packages
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(NavmdStyle())}>
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(NavmdStyle())}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
              </div>
              <div className="flex flex-col justify-center items-center py-2 mb-2 mt-6"></div>
              <SheetFooter>
                <div className="mx-auto mt-64 py-4 justify-center items-center">
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

      {/* <div className="container mx-auto px-4 py-4 flex  justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl  selection:text-violet-800">
            EventCraft
          </span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center" id="nav-links">
          <Link
            className="font-bold hover:scale-105 transition-transform duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-500 hover:after:w-full"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-bold hover:scale-105 transition-transform duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-500 hover:after:w-full"
            href="/about"
          >
            About
          </Link>
          <Link
            className="font-bold hover:scale-105 transition-transform duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-500 hover:after:w-full"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="font-bold hover:scale-105 transition-transform duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-500 hover:after:w-full"
            href="/contact"
          >
            Contact
          </Link>
          <ModeToggle></ModeToggle>
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
              <SheetHeader className="flex justify-center mt-8 mb-2 items-center text-3xl">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/Bytevortex.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  ></Image>
                  <span className="font-bold text-xl">ByteVortex</span>
                </div>
              </SheetHeader>

              <div className="flex flex-col justify-center mt-6 items-center">
                <Link
                  className="block font-bold text-1xl py-2 px-4 hover:scale-105 transition-transform duration-300"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="block font-bold text-1xl py-2 px-4 hover:scale-105 transition-transform duration-300"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="block font-bold text-1xl py-2 px-4 hover:scale-105 transition-transform duration-300"
                  href="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="block font-bold text-1xl py-2 px-4 hover:scale-105 transition-transform duration-300"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center py-2 mb-2 mt-6">
                <ModeToggle></ModeToggle>
              </div>
              <SheetFooter>
                <div className="mx-auto mt-64 py-4 justify-center items-center">
                  <p className="text-sm justify-center text-center">
                    &copy; 2024 ByteVortex. All rights reserved.
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
      </div> */}
    </nav>
  );
}
