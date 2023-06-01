import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function getLocation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req.query.id;
    const { data } = await axios.get(`http://localhost:8000/location/${id}`);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}