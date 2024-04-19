import Modal from "@/components/core/modal";
import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );
  return (
    <Modal>
      <img
        src={product.data.image}
        alt={product.data.title}
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>To{product.data.title}</h3>
        <p>Price : {product.data.price}</p>
      </div>
    </Modal>
  );
}
