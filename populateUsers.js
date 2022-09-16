require('dotenv').config();
const db = require('./config/database')
const User = require('./models/User')

User.create(
    {
        name: 'Eugenia',
        lastName: 'Rossanigo',
        mail: 'eugeniarossanigo@gmail.com',
        password: 'Euge1234',
        photo: 'https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg',
        country: 'Argentina',
        role: 'user',
        from: 'form'
    },
    {
        name: 'Marcos',
        lastName: 'Amuchastegui',
        mail: 'amuchasteguimarcos317@gmail.com',
        password: 'Marcos1234',
        photo: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg',
        country: 'Argentina',
        role: 'user',
        from: 'form'
    },
    {
        name: 'Hector',
        lastName: 'Garay',
        mail: 'hectorgaray@gmail.com',
        password: 'Hector1234',
        photo: 'https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14046.jpg',
        country: 'Chile',
        role: 'user',
        from: 'form'
    }
)
