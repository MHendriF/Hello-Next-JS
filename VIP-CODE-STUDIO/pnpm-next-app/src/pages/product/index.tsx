import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ProductPage() {
  const [isLogin, isSetLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return (
    <>
      <ProductView products={isLoading ? [] : data.data} />
    </>
  );
}
