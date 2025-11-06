import iphone_14 from "./assets/iphone_14.png";
import google_pixel from "./assets/google_pixel.png";
import cannon_eos_camera from "./assets/cannon_eos_camera.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  // Default 3 products
  const [products, setProducts] = useState([
    {
      id: 1,
      image: iphone_14,
      name: "Iphone 14",
      category: "Smartphones",
      description:
        "The iPhone 14 offers powerful performance, an advanced dual-camera system, and impressive battery life. With its sleek design and Apple’s A15 Bionic chip, it delivers speed, durability, and stunning photo and video quality.",
      specs: "lorem ipsum",
      rating: 5,
      price: 999.99,
      quantity: 300,
    },
    {
      id: 2,
      image: google_pixel,
      name: "Google Pixle",
      category: "Phone",
      description:
        "The Google Pixel is a sleek smartphone known for its powerful camera, smooth performance, and pure Android experience. It captures stunning photos, even in low light, and delivers fast, smart, and secure performance powered by Google AI.",
      specs: "lorem ipsum",
      rating: 5,
      price: 499.99,
      quantity: 5,
    },
    {
      id: 3,
      image: cannon_eos_camera,
      name: "Cannon EOS Camera",
      category: "Camera",
      description:
        "The Canon EOS is a high-performance digital camera that captures sharp, vibrant photos and videos. With its fast autofocus, interchangeable lenses, and sleek design, it’s perfect for both beginners and professionals.",
      specs: "lorem ipsum",
      rating: 5,
      price: 749.99,
      quantity: 80,
    },
  ]);

  // Function to add product from modal
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [
      ...prev,
      { ...newProduct, id: Date.now() }, // auto-generate unique ID
    ]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} onAddProduct={handleAddProduct} />}
        />
        <Route path="/details/:id" element={<Details products={products} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
