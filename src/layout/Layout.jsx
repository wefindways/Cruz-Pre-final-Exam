import Header from "../components/Header/Header";
import ProductDisplay from "../components/Main/ProductDisplay";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="grow">
        <ProductDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
