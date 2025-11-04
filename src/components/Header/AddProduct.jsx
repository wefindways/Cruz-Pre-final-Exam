import { Plus } from "lucide-react";

const AddProduct = () => {
  return (
    <div className="flex gap-3 items-center text-white hover:bg-gray-100 py-3 px-5 active:bg-gray-200 transition-colors rounded-full cursor-pointer">
      <div className="relative">
        <Plus size={26} className="cursor-pointer text-gray-700" />
      </div>
      <div>
        <p className="text-gray-800 font-semibold">Add Product</p>
      </div>
    </div>
  );
};

export default AddProduct;
