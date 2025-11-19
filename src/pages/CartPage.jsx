import { useCart } from "../hooks/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import Layout from "../layout/Layout";

const CartPage = () => {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 p-5">
        <h1 className="text-3xl font-bold mb-5">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-5 shadow rounded-xl"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">
                    {item.quantity} × {formatCurrency(item.price)}
                  </p>
                </div>

                <p className="text-violet-600 text-xl font-bold">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            ))}

            <div className="text-right text-2xl font-bold text-violet-700 mt-5">
              Total: {formatCurrency(total)}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
