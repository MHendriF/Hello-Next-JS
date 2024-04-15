import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: string;
  name: number;
  price: number;
  size: string;
};

export default function Product() {
  const [isLogin, isSetLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Product</h1>
      {products.map((product: productType) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
