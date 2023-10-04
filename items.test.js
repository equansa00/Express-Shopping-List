const request = require('supertest');
const app = require('./server');

describe("Items API", () => {
  it('should respond with a 200 status for GET requests to /items', async () => {
    const response = await request(app).get('/items');
    expect(response.statusCode).toBe(200);
  });
  // Add more tests here
});
