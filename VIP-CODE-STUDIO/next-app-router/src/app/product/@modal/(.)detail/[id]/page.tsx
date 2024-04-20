"use client";

// import { getData } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Modal = dynamic(() => import("@/components/core/modal"));

export default function DetailProductPage(props: any) {
  const { params } = props;
  // const product = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`
  // );

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`,
    fetcher
  );

  const product = {
    data: data?.data,
  };

  return (
    <Modal>
      <Image
        width={1000}
        height={1000}
        loading="lazy"
        src={product.data?.image}
        alt={product.data?.name}
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data?.name}</h3>
        <p>Price : {product.data?.price}</p>
      </div>
    </Modal>
  );
}
