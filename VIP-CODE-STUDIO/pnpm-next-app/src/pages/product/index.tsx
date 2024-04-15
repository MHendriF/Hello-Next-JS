import ProductView from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const [isLogin, isSetLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      <ProductView products={products} />
    </>
  );
}
