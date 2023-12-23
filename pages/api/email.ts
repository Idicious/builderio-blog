// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body;

  console.log(req.body);
  res.json({ name, email });
}
