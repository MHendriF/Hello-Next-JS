import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - MHF",
  description: "Next Js App",
  authors: [{ name: "MHendriF", url: "htttp://localhost:3000" }],
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

