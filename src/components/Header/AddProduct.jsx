import { PlusCircle } from "lucide-react";

const AddProduct = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 items-center text-white hover:bg-gray-100 py-3 px-5 active:bg-gray-200 transition-colors rounded-full cursor-pointer"
    >
      <div className="relative">
        <PlusCircle size={26} className="cursor-pointer text-gray-700" />
      </div>
      <div>
        <p className="text-gray-800 font-semibold">Add Product</p>
      </div>
    </button>
  );
};

export default AddProduct;
