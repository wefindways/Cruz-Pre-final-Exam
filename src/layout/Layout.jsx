import Header from "../components/Header/Header";
import ProductDisplay from "../components/ProductDisplay";
import Footer from "../components/Footer";
import Category from "../components/Category";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="grow">
        <Category />
        <ProductDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
