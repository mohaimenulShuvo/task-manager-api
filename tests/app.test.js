const request = require('supertest');
const app = require('../src/app');

describe('Task API', () => {
  it('should return tasks array', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});