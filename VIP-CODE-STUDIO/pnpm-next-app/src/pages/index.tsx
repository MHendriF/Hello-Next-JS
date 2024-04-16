import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home Page</h1>
      <div>Hello hendri</div>
    </>
  );
}

