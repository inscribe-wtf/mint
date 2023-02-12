// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log({ req: req.body });
  const result = await fetch("http://localhost:5001/inscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + "4ee461dee75799e9e3fc96dab5065b36622b7302",
    },
    body: JSON.stringify({
      paymentRequest: req.body.paymentRequest,
    }),
  });
  const data = await result.text();
  res.status(200).json(data);
}
