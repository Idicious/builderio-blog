// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

type Cat = {
  name: string;
  race: string;
};

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  const cats: Cat[] = [
    { name: "Fluffy", race: "Persian" },
    { name: "Whiskers", race: "Siamese" },
    { name: "Mittens", race: "Maine Coon" },
    { name: "Oscar", race: "Bengal" },
    { name: "Simba", race: "Sphynx" },
    { name: "Luna", race: "Ragdoll" },
    { name: "Max", race: "British Shorthair" },
    { name: "Charlie", race: "Scottish Fold" },
    { name: "Bella", race: "Birman" },
    { name: "Leo", race: "Norwegian Forest" },
  ];

  res.status(200).json(cats);
}
