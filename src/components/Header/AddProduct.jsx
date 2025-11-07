import { PlusCircle } from "lucide-react";

const AddProduct = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full shadow-md transition-all duration-200 ml-auto cursor-pointer"
    >
      <PlusCircle size={22} />
      <span>Add Product</span>
    </button>
  );
};

export default AddProduct;
