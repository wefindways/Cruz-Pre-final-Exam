import { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { useCart } from "../hooks/CartContext";

const ProductDetails = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 p-10">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {product.name}
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <p className="text-violet-600 text-4xl font-semibold mb-6">
            ${product.price}
          </p>

          <div className="space-y-3 text-gray-700">
            <div className="flex">
              <span className="font-medium w-40">Specification:</span>
              <span>{product.specs}</span>
            </div>

            <div className="flex">
              <span className="font-medium w-40">Rating:</span>
              <span className="text-yellow-500 font-semibold">
                {product.rating} ★
              </span>
            </div>

            <div className="flex items-center">
              <span className="font-medium w-40">Quantity</span>
              <div className="flex gap-5">
                <input
                  type="number"
                  value={selectedQuantity}
                  min={1}
                  max={product.quantity}
                  onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                />
                <span
                  className={`flex items-center font-semibold ${
                    product.quantity > 5 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {`${
                    product.quantity > 5
                      ? `${product.quantity} pieces available`
                      : "Low Stock"
                  }`}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span className="font-medium w-40">Subtotal:</span>
            <span className="ml-3 text-purple-600 font-bold">
              {formatCurrency(selectedQuantity * product.price)}
            </span>
          </div>

          <button
            onClick={() => addToCart(product, selectedQuantity)}
            className="mt-8 w-full px-6 py-3 rounded-xl bg-violet-600 text-white font-medium
                       hover:bg-violet-700 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
