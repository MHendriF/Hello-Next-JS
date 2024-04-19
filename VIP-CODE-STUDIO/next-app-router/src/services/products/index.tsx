export const getData = async (url: string) => {
  // const res = await fetch("https://fakestoreapi.com/productzzz", {
  //   cache: "no-store",
  // });

  const res = await fetch(url, {
    cache: "force-cache",
    next: {
      tags: ["products"],
      //revalidate: 30,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};
