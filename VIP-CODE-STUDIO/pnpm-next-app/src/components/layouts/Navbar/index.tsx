import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>
      <div>
        {data && data.user.fullname}{" "}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
