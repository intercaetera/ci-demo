const request = require('supertest')('http://localhost:3000')

const app = require('./index')

after(() => {
	app.close()
})

describe('GET /', () => {
	it('responds with status 200', done => {
		request
			.get('/')
			.expect(200, done)
	})
})
