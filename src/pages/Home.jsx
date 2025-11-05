import ProductDisplay from "../components/ProductDisplay";
import Layout from "../layout/Layout";
import Category from "../components/Category";
import { useState } from "react";
import productsData from "../hooks/products";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState(productsData);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <Layout onAddProduct={handleAddProduct}>
      <Category products={products} setSelectedCategory={setSelectedCategory} />
      <ProductDisplay products={products} selectedCategory={selectedCategory} />
    </Layout>
  );
};

export default Home;
