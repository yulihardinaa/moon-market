"use client"

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
  } from "@/components/ui/navigation-menu";
  import {
    Sheet,
    SheetTrigger,
    SheetContent
  } from "@/components/ui/sheet"
  import Image from "next/image";
  import Cart from "../Cart/Cart";
  import { useCart } from "@/store/ProductStore";
  
  const NavBar = () => {
    const { products } = useCart();
    return (
      <NavigationMenu className="max-w-full sticky top-0 bg-white/30 backdrop-blur-md z-10">
        <div className="w-[100%] px-6">
        <NavigationMenuList className="flex items-center justify-between">
          <NavigationMenuItem>
            <Image alt="logo" src="/logo.png" width={80} height={80} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="relative">
              <Sheet>
                <SheetTrigger className="relative">
                 <Image alt="cart" src="/shopping-cart.png" width={40} height={40} />
                 <div className="bg-red-600 h-5 w-5 rounded-3xl text-center absolute right-[-10px] top-0">
                  <p className="absolute top-[-50%] translate-x-2/3 text-white">{products.length > 0? ( products.length > 9 ? <span className="absolute top-[-50%] text-white">9+</span> :products.length): 0 }</p>
                  </div>                     
                </SheetTrigger>
                <SheetContent>
                  <Cart />
                </SheetContent>
              </Sheet>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>            
        </div>

      </NavigationMenu>
    );
  };
  
  export default NavBar;
  