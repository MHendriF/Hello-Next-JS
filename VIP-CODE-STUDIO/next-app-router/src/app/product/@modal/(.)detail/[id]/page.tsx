import { getData } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";

const Modal = dynamic(() => import("@/components/core/modal"));

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );
  return (
    <Modal>
      <Image
        width={1000}
        height={1000}
        loading="lazy"
        src={product.data.image}
        alt={product.data.name}
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data.name}</h3>
        <p>Price : {product.data.price}</p>
      </div>
    </Modal>
  );
}
