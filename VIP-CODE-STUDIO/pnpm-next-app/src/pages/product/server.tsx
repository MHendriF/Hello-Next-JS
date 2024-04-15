import ProductView from "@/views/product";
import { ProductType } from "@/types/product.type";

export default function ProductPage(props: { products: ProductType }) {
  const { products } = props;
  return (
    <>
      <ProductView products={products} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/product`);
  const response = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}
