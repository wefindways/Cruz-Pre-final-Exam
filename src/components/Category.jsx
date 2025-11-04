import products from "../hooks/products";

const Category = () => {
  return (
    <div className="flex items-center gap-4 py-8 px-12">
      {products.map((product, index) => (
        <ul key={index}>
          <li className="bg-white px-5 py-3 rounded-full cursor-pointer font-semibold text-gray-800">{product.category}</li>
        </ul>
      ))}
    </div>
  );
};

export default Category;
