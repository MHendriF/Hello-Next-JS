import { ProductType } from "@/types/product.type";
import styles from "./DetailProduct.module.scss";
import Image from "next/image";

export default function DetailProductView({
  product,
}: {
  product: ProductType;
}) {
  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div className={styles.productDetail}>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className={styles.productDetail__content__item__image}
        />
        <h4 className={styles.productDetail__content__item__name}>
          {product.name}
        </h4>
        <p className={styles.productDetail__content__item__category}>
          {product.category}
        </p>
        <p className={styles.productDetail__content__item__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
}
