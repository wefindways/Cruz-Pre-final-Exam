import BackButton from "../components/BackButton";
import ProductDetails from "../components/ProductDetails";
import Layout from "../layout/Layout";

const Details = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5 max-w-5xl mx-auto mt-10 p-8">
        <BackButton />
        <ProductDetails />
      </div>
    </Layout>
  );
};

export default Details;
