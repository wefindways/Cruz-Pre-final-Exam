import Logo from "./Logo";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import AddProduct from "./AddProduct";
import { useState } from "react";
import Modal from "../Modal";

const Header = ({ onAddProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white py-4 px-12 shadow-md">
      <div className="flex items-center gap-10 w-full max-w-6xl">
        <Logo />
        {/* <SearchBar /> */}
      </div>
      <div className="flex gap-5">
        <AddProduct onClick={() => setIsModalOpen(true)} />
        <CartIcon />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center z-50">
          <div className="absolute top-23">
            <Modal
              setIsModalOpen={setIsModalOpen}
              onAddProduct={onAddProduct}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
