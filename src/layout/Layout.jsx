import Header from "../components/Header/Header";
import ProductDisplay from "../components/ProductDisplay";
import Footer from "../components/Footer";
import Category from "../components/Category";
import { useState } from "react";
import productsData from "../hooks/products";

const Layout = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onAddProduct={handleAddProduct} />

      <main className="grow">
        <Category
          products={products}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductDisplay
          products={products}
          selectedCategory={selectedCategory}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
