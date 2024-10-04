const request = require('supertest');
const app = require('../app');

describe('Route Tests', () => {
  
  test('GET / should return home page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('home page test');
  });

  test('GET /contact should return contact page', async () => {
    const response = await request(app).get('/contact');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('contact page');
  });

  test('GET /login should return login page', async () => {
    const response = await request(app).get('/login');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('login page');
  });

});