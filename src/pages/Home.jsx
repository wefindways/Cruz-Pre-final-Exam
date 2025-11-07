// Home.jsx
import Layout from "../layout/Layout";
import ProductDisplay from "../components/ProductDisplay";
import Category from "../components/Category";
import AddProduct from "../components/Header/AddProduct";
import Modal from "../components/Modal";
import { useState } from "react";

const Home = ({ products, onAddProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout onAddProduct={onAddProduct}>
      <Category products={products} setSelectedCategory={setSelectedCategory} />
      <div className="flex flex-col gap-5 max-w-7xl mx-auto">
        <AddProduct onClick={() => setIsModalOpen(true)} />
        <ProductDisplay
          products={products}
          selectedCategory={selectedCategory}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <Modal setIsModalOpen={setIsModalOpen} onAddProduct={onAddProduct} />
        </div>
      )}
    </Layout>
  );
};

export default Home;
