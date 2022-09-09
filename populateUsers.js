require('dotenv').config();
const db = require('./config/database')
const User = require('./models/User')

User.create(
    {
        name: 'Eugenia',
        lastName: 'Rossanigo',
        mail: 'eugeniarossanigo@gmail.com',
        password: 'Euge1234',
        photo: 'https://image.shutterstock.com/image-photo/asian-female-engineer-working-on-600w-662881189.jpg',
        country: 'Argentina'
    },
    {
        name: 'Marcos',
        lastName: 'Amuchastegui',
        mail: 'marcosamuchastegui@gmail.com',
        password: 'Marcos1234',
        photo: 'https://image.shutterstock.com/image-photo/sofware-developer-thinking-while-touching-600w-2108122583.jpg',
        country: 'Argentina'
    },
    {
        name: 'Mariah',
        lastName: 'Evans',
        mail: 'mariahevans@gmail.com',
        password: 'Mariah1234',
        photo: 'https://image.shutterstock.com/image-photo/asian-female-engineer-working-on-600w-662881189.jpg',
        country: 'United States'
    },
    {
        name: 'John',
        lastName: 'Doe',
        mail: 'johndoe@gmail.com',
        password: 'John1234',
        photo: 'https://image.shutterstock.com/image-photo/successful-creative-director-working-on-600w-2136788115.jpg',
        country: 'United States'
    },
    {
        name: 'Emmanuelle',
        lastName: 'Canet',
        mail: 'emmanuellecanet@gmail.com',
        password: 'Emma1234',
        photo: 'https://image.shutterstock.com/image-photo/asian-female-engineer-working-on-600w-662881189.jpg',
        country: 'France'
    },
    {
        name: 'Vincenzo',
        lastName: 'De Luca',
        mail: 'vincenzodeluca@gmail.com',
        password: 'Vince1234',
        photo: 'https://image.shutterstock.com/image-photo/successful-creative-director-working-on-600w-2136788115.jpg',
        country: 'Italy'
    }
)

