const request = require('supertest');
const app = require('../src/index');
describe('Express App', () => {
  it('should respond with a greeting', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Express Typescript on Vercel');
  });
});
