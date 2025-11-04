import { Handbag } from "lucide-react";

const CartIcon = () => {
  return (
    <div className="flex gap-3 items-center text-white hover:bg-gray-100 py-3 px-5 active:bg-gray-200 transition-colors rounded-full cursor-pointer">
      <div className="relative">
        <Handbag
          size={26}
          className="cursor-pointer text-gray-700"
        />
        <span className="absolute -top-2 -right-2 flex justify-center items-center bg-red-600 rounded-full w-5 h-5 text-xs font-semibold">
          2
        </span>
      </div>
      <div>
        <p className="text-gray-800 font-semibold">Cart</p>
      </div>
    </div>
  );
};

export default CartIcon;
