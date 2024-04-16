import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";

export default function LoginView() {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl">Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p
        style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}
      >
        Belum punya akun? <Link href="/auth/register">Register disini</Link>
      </p>
    </div>
  );
}
