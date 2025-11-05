import { useState } from "react";

const Category = ({ products, setSelectedCategory }) => {
  const uniqueCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const [isActive, setIsActive] = useState("All");

  return (
    <div className="flex items-center gap-4 py-8 px-12">
      {uniqueCategories.map((category, index) => (
        <ul key={index}>
          <li
            onClick={() => {
              setSelectedCategory(category);
              setIsActive(category);
            }}
            className={`px-5 py-3 rounded-full cursor-pointer font-semibold transition-colors duration-200
              ${
                isActive === category
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
          >
            {category}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Category;
