import * as React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const menuItems = [
  { title: "Home", href: "home" },
  { title: "Products", href: "products" },
  { title: "About Us", href: "about" },
  { title: "Shopping", href: "shopping" },
  { title: "Explore With Us", href: "explore-with-us" },
];

const products = [
  { title: "Audio", href: "audio" },
  { title: "Wearable", href: "wearable" },
  { title: "Power", href: "power" },
  { title: "Personal Care", href: "personal-care" },
  { title: "Home Appliance", href: "home-appliance" },
];

export function MainNav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center backdrop-blur h-[8rem] px-[4rem] lg:px-[10rem] lg:h-[6rem] bg-black/30 lg:bg-black">
      <Link to="home" smooth={true} className="block text-orange-500 text-4xl font-bold tracking-wide">
        More power
      </Link>
      <div className="flex-1 lg:hidden" />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus:ring-0 lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                smooth={true}
                className="block px-2 py-1 text-sm"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden lg:flex h-full items-center flex-1 tracking-widest">
        <NavigationMenu className="h-full">
          <NavigationMenuList className="h-full flex flex-1 cursor-default font-semibold space-x-[4rem] ml-[6rem] text-sm">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title} className="h-full flex justify-center items-center">
                <Link
                  to={item.href}
                  smooth={true}
                  className="h-full flex items-center px-5 py-2 text-white hover:text-orange-500 transition-colors"
                >
                  {item.title.toUpperCase()}
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem className="h-full flex justify-center items-center">
              <NavigationMenuTrigger className="h-full bg-transparent hover:bg-orange-500 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                PRODUCT
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {products.map((product) => (
                    <li key={product.title}>
                      <Link
                        to={product.href}
                        smooth={true}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Social Media Icons */}
      <div className="flex space-x-4 ml-4 sm-d-grid">
        <a href="https://www.instagram.com/more_power7?igsh=cTZyNXR6YzloN2Zk" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6 text-white hover:text-orange-500 transition-colors" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61568294131146" target="_blank" rel="noopener noreferrer">
          <CiFacebook className="h-6 w-6 text-white hover:text-orange-500 transition-colors" />
        </a>
        <a href="https://www.tiktok.com/@more.power8?_t=8rZl7ao1eBL&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="h-6 w-6 text-white hover:text-orange-500 transition-colors" />
        </a>
      </div>
    </nav>
  );
}
