import type { NextApiRequest, NextApiResponse } from "next";
import Fighter from "../../types/Fighter";
import data from "../../public/data/fighters.json";

type Data = {
  fighters: Array<Fighter>;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    fighters: data,
  });
}
