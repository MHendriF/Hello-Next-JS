import { useRouter } from "next/router";

export default function DetailProductPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product ID: {query.id}</p>
    </div>
  );
}
