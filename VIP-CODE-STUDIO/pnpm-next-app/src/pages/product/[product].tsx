import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProductView from "@/views/detailProduct";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailProductPage({
  product,
}: {
  product: ProductType;
}) {
  const { query } = useRouter();
  const { data }: any = useSession();

  // client-side
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.id}`,
  //   fetcher
  // );

  return (
    <>
      {/* client-side */}
      {/* <DetailProductView product={isLoading ? {} : data.data} /> */}

      {/* server-side & static-side */}
      <DetailProductView product={product} />
    </>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`
  );
  const response = await res.json();
  return {
    props: {
      product: response.data,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/product`);
//   const response = await res.json();
//   const paths = response.data.map((product: ProductType) => ({
//     params: { product: product.id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
