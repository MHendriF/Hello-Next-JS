import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { status }: { status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between">
      <div className="flex">
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 cursor-pointer ${
                pathname === "/" ? "text-blue-300 " : "text-white"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 cursor-pointer ${
                pathname === "/about" ? "text-blue-300 " : "text-white"
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 cursor-pointer ${
                pathname === "/about/profile" ? "text-blue-300 " : "text-white"
              }`}
            >
              Profile
            </li>
          </Link>
          <Link href="/dashboard">
            <li
              className={`mr-3 cursor-pointer ${
                pathname === "/dashboard" ? "text-blue-300 " : "text-white"
              }`}
            >
              Dashboard
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <button
            className="bg-white text-sm px-3 h-7 rounded-md cursor-pointer"
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-white text-sm px-3 h-7 rounded-md cursor-pointer"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
