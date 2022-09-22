const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmE2YzZmYWVjY2JkNzg2NTVmNjcwNSIsImlhdCI6MTY2Mzc5MzkwMSwiZXhwIjoxNjYzODgwMzAxfQ.l4JJuDO4jCKW4fPGX1pbyuamPvSnk-kGfshivnidt6s'

describe('POST /comments', function () {
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/comments')
            .set({ Authorization: `Bearer ${token}` })
            .send({
                comment:'Holaaaaaa',
                user:'632a6c6faeccbd78655f6705' ,
                itinerary:'632b67d5ffee7ba821832237' 
            })
            .expect(201, done)
    })
}),

describe('GET /comments', function () {
    id="632b8f9aeed40bf05e7bdfb2"
    it('Must respond with 200 status code you get the comment', function (done) {
        request(app)
            .get('/comments/'+id)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200, done)
    })
})