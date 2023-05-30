import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function getRickCharacters(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await axios.get('http://localhost:8000/alive-ricks');
    res.status(200).json(data.results);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
