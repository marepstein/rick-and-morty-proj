import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function getRickAndMorty(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await axios.get(`http://${process.env.BACKEND_API_URL}/v1/characters`);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
