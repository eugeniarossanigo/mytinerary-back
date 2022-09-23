const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmJiYzk5YjhjMWNhYTEyYTIwZWI5ZCIsImlhdCI6MTY2Mzk0MTcyMCwiZXhwIjoxNjY0MDI4MTIwfQ.mmWtYZeoqyZk0bSXKrfZtmYE0iviPeOMhGmXhgXjSBk'

describe('POST /comments', function () {
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/comments')
            .set({ Authorization: `Bearer ${token}` })
            .send({
                comment: 'Holaaaaaa',
                user: '632a6c6faeccbd78655f6705',
                itinerary: '632b67d5ffee7ba821832237'
            })
            .expect(201, done)
    })
}),

    describe('GET /comments', function () {
        id = "632bf31a8debc4d572f94cca"
        it('Must respond with 200 status code you get the comment', function (done) {
            request(app)
                .get('/comments/' + id)
                .set({ Authorization: `Bearer ${token}` })
                .expect(200, done)
        })

    })

describe('PATCH /comments', function () {
    id = "632cf523d30bfdbc016a5161"
    it('Must respond with 200 status code', function (done) {
        request(app)
            .patch('/comments/' + id)
            .send({
                user: "632a6c6faeccbd78655f6705",
                comment: "modified comment",
                itinerary: "6318b8f20c1f1f1e4d58e2bc"
            })
            .set('Authorization', `Bearer ${token}`)
            .expect(200, done)
    })
})