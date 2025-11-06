import { Link } from "react-router-dom";

const ProductDisplay = ({ products, selectedCategory }) => {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-15 gap-8">
      {filteredProducts.map((product, index) => (
        <Link
          to={`/details/${product.id}`}
          key={index}
          className="bg-linear-to-r from-gray-200 via-gray-200 to-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-5 bg-white flex flex-col grow">
            <h2 className="text-center text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h2>
            <div className="flex justify-center">
              <p className="border-3 rounded-full border-violet-500 px-4 py-1 text-violet-500 font-bold text-xl mt-1">
                ${product.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductDisplay;
