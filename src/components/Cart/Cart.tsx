import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import CheckoutProduct from "./CheckoutProduct";


  const Cart = () => {

    return(

    <SheetHeader>
      <SheetTitle>Moon Market Checkout Bliss</SheetTitle>
      <SheetDescription>
        Seamless Shopping, Stellar Style! Your Moon Market Cart is ready for takeoff
      </SheetDescription>
      <div className="overflow-y-auto">
      <CheckoutProduct />
      </div>
    </SheetHeader>
    );
  };

  export default Cart;