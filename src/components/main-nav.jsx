"use client"

import * as React from "react"
import { Link } from "react-scroll"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FaInstagram } from "react-icons/fa6"
import { CiFacebook } from "react-icons/ci"
import { FaTiktok } from "react-icons/fa"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const menuItems = [
  { title: "Home", href: "home" },
  { title: "Products", href: "products" },
  { title: "About Us", href: "about" },
  { title: "Shopping", href: "shopping" },
  { title: "Explore With Us", href: "explore-with-us" },
]

const products = [
  { title: "Audio", href: "audio" },
  { title: "Wearable", href: "wearable" },
  { title: "Power", href: "power" },
  { title: "Personal Care", href: "personal-care" },
  { title: "Home Appliance", href: "home-appliance" },
]

export function MainNav() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  const closeSheet = () => {
    setIsSheetOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between backdrop-blur bg-black/30 lg:bg-black px-4 sm:px-6 lg:px-10 py-4 lg:py-0">
      <Link
        to="home"
        smooth={true}
        className="text-orange-500 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide"
      >
        More power
      </Link>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
      
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                smooth={true}
                className="block px-2 py-2 text-lg hover:text-orange-500 transition-colors"
                onClick={closeSheet}  // Close the menu on link click
              >
                {item.title}
              </Link>
            ))}
            {/* <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              {products.map((product) => (
                <Link
                  key={product.title}
                  to={product.href}
                  smooth={true}
                  className="block px-2 py-2 text-sm hover:text-orange-500 transition-colors"
                  onClick={closeSheet}  // Close the menu on link click
                >
                  {product.title}
                </Link>
              ))}
            </div> */}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden lg:flex h-full m-9 items-center flex-1 tracking-widest">
        <NavigationMenu className="h-full">
          <NavigationMenuList className="h-full flex flex-1 cursor-default font-semibold space-x-4 xl:space-x-8 ml-8 xl:ml-16 text-xs xl:text-sm">
            {menuItems.map((item) => (
              <NavigationMenuItem
                key={item.title}
                className="h-full flex justify-center items-center"
              >
                <Link
                  to={item.href}
                  smooth={true}
                  className="h-full flex items-center px-2 xl:px-4 py-2 text-white hover:text-orange-500 transition-colors"
                >
                  {item.title.toUpperCase()}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Social Media Icons */}
      <div className="flex space-x-2 sm:space-x-4 ml-2 sm:ml-4">
        <a
          href="https://www.instagram.com/more_power7?igsh=cTZyNXR6YzloN2Zk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-6 w-6 sm:h-5 sm:w-5 text-white hover:text-orange-500 transition-colors" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61568294131146"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiFacebook className="h-6 w-6 sm:h-5 sm:w-5 text-white hover:text-orange-500 transition-colors" />
        </a>
        <a
          href="https://www.tiktok.com/@more.power8?_t=8rZl7ao1eBL&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="h-6 w-6 sm:h-5 sm:w-5 text-white hover:text-orange-500 transition-colors" />
        </a>
      </div>
      <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus:ring-0 lg:hidden"
            onClick={() => setIsSheetOpen(!isSheetOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
    </nav>
  )
}
