const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

describe('POST /cities', function () {
    it('Must respond with the id', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "CityTest",
                province: "Test",
                country: "Argentina",
                photo: "test.jpg",
                population: "307564",
                fundation: "1536-01-01",
                description: "testttttttttttttt"
            })
            .then(response => {
                console.log(response.body.id)
                assert.isString(response.body.id)
                done()
            }).catch(done)
    })
    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "CityTest",
                province: "",
                country: "Argentina",
                photo: "test.jpg",
                population: "307564",
                fundation: "1536-01-01",
                description: "testttttttttttttt"
            })
            .expect(400, done)
    })
})

describe('PUT /cities', function () {
    it('Must update city', function (done) {
        let cityTestUpdate = {
            city: "Prueba",
            province: "Test",
            country: "ArgentinaUpdate",
            photo: "test.jpg",
            population: "307564",
            fundation: "1536-01-01",
            description: "testttttttttttttt"
        }
        request(app)
            .put('/cities/63197ab51b8cf80b5d5ed759')
            .send(cityTestUpdate)
            .expect(200, done)
    })
})
