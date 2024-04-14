import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p>
        Belum punya akun? <Link href="/auth/register">Register disini</Link>
      </p>
    </div>
  );
}
