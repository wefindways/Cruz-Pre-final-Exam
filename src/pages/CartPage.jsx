import { useCart } from "../hooks/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import Layout from "../layout/Layout";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const { cart, removeToCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 p-5">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 bg-white p-5 rounded-2xl shadow-md 
                 border border-gray-100 hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {formatCurrency(item.price)} × {item.quantity}
                    </p>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <p className="text-violet-600 text-lg font-bold">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeToCart(item)}
                    className="p-2 rounded-xl hover:bg-red-50 text-red-500 hover:text-red-600 
                   transition active:scale-90 cursor-pointer"
                    title="Remove from cart"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-100 sticky bottom-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-700">Total</h2>
                <p className="text-2xl font-extrabold text-violet-700">
                  {formatCurrency(total)}
                </p>
              </div>

              <button className="mt-6 w-full py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition active:scale-95 cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
