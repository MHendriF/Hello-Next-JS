import ProductView from "@/views/product";
import { ProductType } from "@/types/product.type";

export default function ProductPage(props: { products: ProductType[] }) {
  const { products } = props;
  return (
    <>
      <ProductView products={products} />
    </>
  );
}

// dipanggil setiap melakukan request
export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/product`);
  const response = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}
