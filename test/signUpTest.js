const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

describe('POST /signup', function () {
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/auth/signup')
            .send({
                name: 'Esequiel',
                lastName:'Amuchastegui',
                mail:'amuchasteguiesequiel@gmail.com' ,
                password: '123456789ese',
                photo: 'https://sakkldlkdak.com',
                country:'Argentina',
                role:'user',
                from:'from'
            })
            .expect(201, done)
    })
})


describe('POST /signup', function () {
        it('Must respond with 400 status code', function (done) {
            request(app)
                .post('/auth/signup')
                .send({
                    name: 'ma',
                    lastName:'amuchastegui',
                    mail:'marcosamu90@gmail.com' ,
                    password: '12343242332432np',
                    photo: 'https://sakkldlkdak.com',
                    country:'Argentina',
                    role:'user',
                    from:'form'
                })
                .expect(400, done)
        })
    })

describe('POST /signup', function () {
        it('Must respond with 400 status code', function (done) {
            request(app)
                .post('/auth/signup')
                .send({
                    name: 'marcos',
                    lastName:'amuchastegui',
                    mail:'marcosamu90@gmail.com' ,
                    password: '12343242332432np',
                    photo: 'photo.jpg',
                    country:'Argentina',
                    role:'user',
                    from:'form'
                })
                .expect(400, done)
        })
    })
