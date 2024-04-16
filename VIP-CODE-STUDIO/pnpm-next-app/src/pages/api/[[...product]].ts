// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const id = req.query.product?.[1];
    let data: any;
    if (id) {
      data = await retrieveDataById("products", id);
    } else {
      data = await retrieveData("products");
    }
    res.status(200).json({ status: true, statusCode: 200, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      statusCode: 500,
      data: { message: "Internal server error" },
    });
  }
}
