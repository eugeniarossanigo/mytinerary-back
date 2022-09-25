const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

describe('POST /signin', function () {
    it('Must respond with 404 status code', function (done) {
        request(app)
            .post('/auth/signin')
            .send({
                mail: 'marcodasjhdsajhd9@gmail.com',
                password: '12343242332432np',
                from: 'form'
            })
            .expect(404, done)
    }),

        it('Must respond with 201 status code', function (done) {
            request(app)
                .post('/auth/signin')
                .send({
                    mail: 'marcosamu9@gmail.com',
                    password: '12343242332432np',
                    from: 'form'
                })
                .expect(200, done)
        })

    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/auth/signin')
            .send({
                mail: 'amuchasteguiesequiel@gmail.com',
                password: '123456789ese',
                from: 'google'
            })
            .then(response => {
                console.log(response.body.id)
                assert.isString(response.body.id)
                done()
            }).catch(done)
    })
})


