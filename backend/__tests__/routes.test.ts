import * as request from 'supertest';

import app from '../server';

describe('Characters routes', () => {
  test('Get all characters', async () => {
    const res = await request(app).get('/v1/characters');
    expect(res.status).toEqual(200);
  });
});

afterAll((done) => {
  done();
});
