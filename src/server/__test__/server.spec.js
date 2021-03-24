import 'babel-polyfill'
const request = require('supertest')
const app = require('../index')

describe('Server Test', () => {
    test('/okby response with error wrong path', (done) => {
        request(app)
            .get('/okby')
            .then((response) => {
                expect(response.statusCode).toBe(404)
                done()
            })
    })
})
