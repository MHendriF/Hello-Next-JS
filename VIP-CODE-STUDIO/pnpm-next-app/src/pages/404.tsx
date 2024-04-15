import styles from "@/styles/404.module.scss";

export default function CustomError404() {
  return (
    <div className={styles.error}>
      <img src="/not_found.png" alt="404" className={styles.error__image} />
      <div>Halaman tidak ditemukan</div>
    </div>
  );
}
