import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";
  import Image from "next/image";
  
  const NavBar = () => {
    return (
      <NavigationMenu className="max-w-full">
        <div className="w-[100%] px-6">
        <NavigationMenuList className="flex items-center justify-between">
          <NavigationMenuItem>
            <Image alt="logo" src="/logo.png" width={80} height={80} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Image alt="cart" src="/shopping-cart.png" width={40} height={40} />
          </NavigationMenuItem>
        </NavigationMenuList>            
        </div>

      </NavigationMenu>
    );
  };
  
  export default NavBar;
  