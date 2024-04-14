import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const [isLogin, isSetLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}
