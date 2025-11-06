// Home.jsx
import Layout from "../layout/Layout";
import ProductDisplay from "../components/ProductDisplay";
import Category from "../components/Category";
import { useState } from "react";

const Home = ({ products, onAddProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Layout onAddProduct={onAddProduct}>
      <Category products={products} setSelectedCategory={setSelectedCategory} />
      <ProductDisplay products={products} selectedCategory={selectedCategory} />
    </Layout>
  );
};

export default Home;
