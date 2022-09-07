require('dotenv').config();
const db = require('./config/database');
const Itinerary = require('./models/Itinerary')

Itinerary.create(
    // calafate
    {
        name: 'Ice rivers',
        user: '6318aff24a57ccc17393d91a',
        city: '631768d0c561b3f4a98d5534',
        price: 7000,
        likes: [7],
        tags: ['patagonia', 'calafate', 'peritomoreno', 'glacier'],
        duration: 7
    },
    {
        name: 'City ice tour',
        user: '6318aff24a57ccc17393d91a',
        city: '631768d0c561b3f4a98d5534',
        price: 3300,
        likes: [3],
        tags: ['patagonia', 'calafate', 'museum', 'reserve'],
        duration: 4
    },
    // buenos aires
    {
        name: 'Museums tour',
        user: '6318aff24a57ccc17393d918',
        city: '631768d0c561b3f4a98d5533',
        price: 2200,
        likes: [5],
        tags: ['buenosaires', 'museum', 'art', 'culture'],
        duration: 5
    },
    {
        name: 'Argentine political history',
        user: '6318aff24a57ccc17393d916',
        city: '631768d0c561b3f4a98d5533',
        price: 3100,
        likes: [8],
        tags: ['buenosaires', 'political', 'history', 'argentina'],
        duration: 5
    },
    {
        name: 'Recreation afternoon',
        user: '6318aff24a57ccc17393d917',
        city: '631768d0c561b3f4a98d5533',
        price: 4800,
        likes: [3],
        tags: ['buenosaires', 'teather', 'laboca', 'bustour'],
        duration: 6
    },
    // bariloche
    {
        name: 'Snow experience in Cerro Catedral',
        user: '6318aff24a57ccc17393d91b',
        city: '631768d0c561b3f4a98d553c',
        price: 5100,
        likes: [5],
        tags: ['bariloche', 'ski', 'cerrocatedral', 'snow'],
        duration: 6
    },
    // purmamarca
    {
        name: 'Purmamarca: the town',
        user: '6318aff24a57ccc17393d919',
        city: '631768d0c561b3f4a98d553a',
        price: 1500,
        likes: [3],
        tags: ['purmamarca', 'sietecolores', 'cerro', 'colorados'],
        duration: 3
    },
    {
        name: 'A salt desert',
        user: '6318aff24a57ccc17393d919',
        city: '631768d0c561b3f4a98d553a',
        price: 3500,
        likes: [5],
        tags: ['purmamarca', 'salinas'],
        duration: 6
    },
    // tupungato
    {
        name: 'The wine road',
        user: '6318aff24a57ccc17393d91a',
        city: '631768d0c561b3f4a98d553b',
        price: 7000,
        likes: [2],
        tags: ['tupungato', 'valledeuco', 'wine', 'bodega'],
        duration: 7
    },
    // tucumán
    {
        name: 'History and trekking',
        user: '6318aff24a57ccc17393d918',
        city: '631768d0c561b3f4a98d5538',
        price: 2000,
        likes: [1],
        tags: ['tucuman', 'casita', 'history', 'independency'],
        duration: 5
    }
)