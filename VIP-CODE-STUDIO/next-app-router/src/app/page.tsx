import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Home - MHF",
  description: "Next Js App",
  authors: [{ name: "MHendriF", url: `${process.env.NEXT_PUBLIC_API_URL}` }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Home - MHF",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page
    </main>
  );
}

