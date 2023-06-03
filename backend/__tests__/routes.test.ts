import * as request from 'supertest';

import app from '../app';

describe('Characters routes', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  test('Get all characters', async () => {
    const res = await request(app).get('/v1/characters');
    expect(res.status).toEqual(200);
  });

  afterAll((done) => {
    server.close(done);
  });
});
