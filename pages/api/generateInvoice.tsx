// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log({ req: req.body });
  const result = await fetch("http://localhost:5001/generateInvoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + "4ee461dee75799e9e3fc96dab5065b36622b7302",
    },
    body: JSON.stringify({
      address: req.body.address,
      totalAmountInSats: req.body.totalAmountInSats,
      numberOfInscriptions: req.body.numberOfInscriptions,
    }),
  });
  const data = await result.json();
  res.status(200).json(data);
}
