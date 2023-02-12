// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await fetch(
    `http://localhost:5001/getInvoiceStatus?paymentRequest=${req.query.paymentRequest}`,
    {
      headers: {
        authorization: "Bearer " + "4ee461dee75799e9e3fc96dab5065b36622b7302",
      },
    }
  );
  const data = await result.json();
  res.status(200).json(data);
}
