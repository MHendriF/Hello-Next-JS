import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  return (
    <>
      <ProductView products={isLoading ? [] : data?.data} />
    </>
  );
}
