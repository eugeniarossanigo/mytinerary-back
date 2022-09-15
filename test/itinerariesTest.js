// const request = require('supertest')
// const app = require('../app')
// const { assert } = require('chai')

// describe('POST /itineraries', function () {
//     it('Must respond with 201 status code', function (done) {
//         request(app)
//             .post('/itineraries')
//             .send({
//                 name: 'Test Itinerary',
//                 user: '6318aff24a57ccc17393d91a',
//                 city: '631768d0c561b3f4a98d5534',
//                 price: 7000,
//                 likes: [7],
//                 tags: ['test'],
//                 duration: 7
//             })
//             .expect(201, done)
//     })
//     it('Must create itinerary and show body', function (done) {
//         let itineraryTest = {
//             name: 'Test Itinerary',
//             user: '6318aff24a57ccc17393d91a',
//             city: '631768d0c561b3f4a98d5534',
//             price: 7000,
//             likes: [7],
//             tags: ['test'],
//             duration: 7
//         }
//         request(app)
//             .post('/itineraries')
//             .send(itineraryTest)
//             .expect(201)
//             .end(function (err, res) {
//                 if (err) {
//                     return done(err);
//                 }
//                 cityTest = res.body;
//                 done();
//         });
//     }) 
// })

// describe('DELETE /itineraries', function () {
//     id = "63197bbbcb6d35a00e73e411"
//     it('Must detele itinerary', function (done) {
//         request(app)
//             .del('/itineraries/'+id)
//             .expect(200, done)
//     })
// })

