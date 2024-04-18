import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Baju",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/82ebffbc-7ba5-4ebb-85d7-03d47d802bd9/killshot-2-leather-shoes-1DJNnt.png",
  },
  {
    id: 2,
    name: "Sepatu",
    price: 300000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/82ebffbc-7ba5-4ebb-85d7-03d47d802bd9/killshot-2-leather-shoes-1DJNnt.png",
  },
  {
    id: 3,
    name: "Celana",
    price: 400000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/82ebffbc-7ba5-4ebb-85d7-03d47d802bd9/killshot-2-leather-shoes-1DJNnt.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: {},
    });
  }
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: data,
  });
}
