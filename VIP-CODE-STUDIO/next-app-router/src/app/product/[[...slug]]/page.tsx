type DetailProductPageProps = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log(params);
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {params.slug ? "Detail Product Page" : "Product Page"}
      </h1>
      {params.slug && <p>Slug : {params.slug}</p>}
    </>
  );
}
