import { NextApiRequest, NextApiResponse } from 'next';
import { query as q } from 'faunadb';

import { fauna } from '../../services/fauna';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { body } = req;

    try {
      const state = await fauna.query(
        q.If(
          q.Not(
            q.Exists(
              q.Match(q.Index('state_by_initials', q.Casefold(body.initials))),
            ),
          ),
          q.Create(q.Collection('states'), { data: body }),
          q.Get(
            q.Match(q.Index('state_by_initials', q.Casefold(body.initials))),
          ),
        ),
      );

      console.log(state);

      res.status(200).json(state);
    } catch (error) {
      console.log(error);
      res.status(403).json({ error: 'State already exists' });
    }
  }

  if (req.method === 'GET') {
    const states = ['rj', 'sp', 'mg'];

    return res.status(200).json(states);
  }
};
