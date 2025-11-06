import { useParams } from "react-router-dom";
import productsData from "../hooks/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  return (
    <div className="max-w-full mx-auto bg-white rounded-2xl shadow-md p-8">
      <div>
        <div className="flex justify-center mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-cover rounded-xl"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-violet-600 text-3xl font-semibold">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
