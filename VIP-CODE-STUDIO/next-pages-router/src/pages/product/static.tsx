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
// export async function getStaticProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
//   const response = await res.json();
//   return {
//     props: {
//       products: response.data,
//     },
//   };
// }
