require('dotenv').config();
const db = require('./config/database')
const Activity = require('./models/Activity')

Activity.create(
    // calafate
    {
        name: 'Boat trip to Spegazzini glacier and trekking to Upsala glacier',
        photo: 'http://drive.google.com/uc?export=view&id=10YWrucJ24YDyGdmrMobjMtCU1VZhLBz-',
        itinerary: '6318b8f20c1f1f1e4d58e2bc'
    },
    {
        name: 'Boat trip and mini-trekking to Perito Moreno glacier',
        photo: 'http://drive.google.com/uc?export=view&id=1yyGeFCrObB3lmSE5qzeQLCUGbG1k1TSS',
        itinerary: '6318b8f20c1f1f1e4d58e2bc'
    },
    {
        name: 'Lunch and music in boat trip',
        photo: 'http://drive.google.com/uc?export=view&id=1sk60rCqfaB3GDQQdkIiOZqsp08LBsvNL',
        itinerary: '6318b8f20c1f1f1e4d58e2bc'
    },
    {
        name: 'Glaciarium: Patagonic ice museum',
        photo: 'http://drive.google.com/uc?export=view&id=11-_zZXCkUewO6uj0V1cSfAufc2iploaV',
        itinerary: '6318b8f20c1f1f1e4d58e2bd'
    },
    {
        name: 'Glacio Bar, made in glacier ice',
        photo: 'http://drive.google.com/uc?export=view&id=1O-DuXn19U4W-vRBeCZnD6mGnikW1k9rD',
        itinerary: '6318b8f20c1f1f1e4d58e2bd'
    },
    {
        name: 'Laguna Nime reserve',
        photo: 'http://drive.google.com/uc?export=view&id=15oMjhA5b6DcH7xepaJcdb2LkCOZiSqAz',
        itinerary: '6318b8f20c1f1f1e4d58e2bd'
    },
    // buenos aires
    {
        name: 'Museo de Arte Latinoamericano de BA',
        photo: 'http://drive.google.com/uc?export=view&id=13-hUHh72bkR9D1He6EHj7xPL9klq-Gz3',
        itinerary: '6318b8f20c1f1f1e4d58e2be'
    },
    {
        name: 'Museo Nacional de Bellas Artes',
        photo: 'http://drive.google.com/uc?export=view&id=19Q8u4xQjDtbp8bnk1dafafpnHPYrR5-R',
        itinerary: '6318b8f20c1f1f1e4d58e2be'
    },
    {
        name: 'Museo del Bicentenario',
        photo: 'http://drive.google.com/uc?export=view&id=1KkZxhravmpS6UYNWZB0FeqeQ23irHUws',
        itinerary: '6318b8f20c1f1f1e4d58e2be'
    },
    {
        name: 'Centro Cultural Kirchner',
        photo: 'http://drive.google.com/uc?export=view&id=1Zm8k96ggoCA1ow80SzT32gbNcG1ikCP2',
        itinerary: '6318b8f20c1f1f1e4d58e2bf'
    },
    {
        name: 'Casa Rosada',
        photo: 'http://drive.google.com/uc?export=view&id=10y9du6w_G873K96_0kzPLLnNUQght9Ia',
        itinerary: '6318b8f20c1f1f1e4d58e2bf'
    },
    {
        name: 'Recoleta cemetery',
        photo: 'http://drive.google.com/uc?export=view&id=1-7emlZDzHm9nPwW0gKtXJ86qyXPv1gW7',
        itinerary: '6318b8f20c1f1f1e4d58e2bf'
    },
    {
        name: 'Tour Bus',
        photo: 'http://drive.google.com/uc?export=view&id=1QhhZybDKdJvCzx9e3E-_fmAl3fpFYjnj',
        itinerary: '6318b8f20c1f1f1e4d58e2c0'
    },
    {
        name: 'Colón Theater',
        photo: 'http://drive.google.com/uc?export=view&id=1ESkobeDvnc-Bg4vzh15kL6f-z7UhMpPK',
        itinerary: '6318b8f20c1f1f1e4d58e2c0'
    },
    {
        name: 'Caminito',
        photo: 'http://drive.google.com/uc?export=view&id=1kBCirWnmTcr7m5aL7pbu0SoAOFjkTtSz',
        itinerary: '6318b8f20c1f1f1e4d58e2c0'
    },
    // bariloche
    {
        name: 'Ski & Snowboard',
        photo: 'http://drive.google.com/uc?export=view&id=1MhamwIlcRwL6RhxIu4GrVEAhzWoBtC2M',
        itinerary: '6318b8f20c1f1f1e4d58e2c1'
    },
    {
        name: 'Ski lift',
        photo: 'http://drive.google.com/uc?export=view&id=1O-DuXn19U4W-vRBeCZnD6mGnikW1k9rD',
        itinerary: '6318b8f20c1f1f1e4d58e2c1'
    },
    {
        name: ' Brunch at Refugio Lynch',
        photo: 'http://drive.google.com/uc?export=view&id=14pen6gbFXi6z2aNXF9pdcCbardVacIhU',
        itinerary: '6318b8f20c1f1f1e4d58e2c1'
    },
    // purmamarca
    {
        name: 'Cerro de los Siete Colores',
        photo: 'http://drive.google.com/uc?export=view&id=1UbE3qbX1LgkZCCe5MzbOWCHrGq8iRirf/',
        itinerary: '6318b8f20c1f1f1e4d58e2c2'
    },
    {
        name: 'City market',
        photo: 'http://drive.google.com/uc?export=view&id=1yIAyi6wvK_80kKIhO8zCIJFu1gH-UaWC',
        itinerary: '6318b8f20c1f1f1e4d58e2c2'
    },
    {
        name: 'Paseo de los Colorados',
        photo: 'http://drive.google.com/uc?export=view&id=1OsiyLiEQEjCb_4DrrNol_X6v3N8UDIlg',
        itinerary: '6318b8f20c1f1f1e4d58e2c2'
    },
    {
        name: 'Salinas Grandes',
        photo: 'http://drive.google.com/uc?export=view&id=1RiwU1itIACOc8mf3J1Oikf_0wMp04zi_',
        itinerary: '6318b8f20c1f1f1e4d58e2c3'
    },
    {
        name: 'Laguna de Guayatayoc',
        photo: 'http://drive.google.com/uc?export=view&id=1SI5qQ2vAEjTWmMMpqOL2SldnImXAp_RF',
        itinerary: '6318b8f20c1f1f1e4d58e2c3'
    },
    {
        name: 'Cuesta de Lipán',
        photo: 'http://drive.google.com/uc?export=view&id=1qAQir7nNPPIoSWN2k99fbV2NrbkOqLjj',
        itinerary: '6318b8f20c1f1f1e4d58e2c3'
    },
    // tupungato
    {
        name: 'Bodegas Salentein',
        photo: 'http://drive.google.com/uc?export=view&id=1NILQYXUvyvsuwnWyIcfvLk0iOh9N_qiM',
        itinerary: '6318b8f20c1f1f1e4d58e2c4'
    },
    {
        name: 'Bodega Jean Bousquet',
        photo: 'http://drive.google.com/uc?export=view&id=1XaEnYJBOgdqK0bb9QkiZmkxOE0I-uat7',
        itinerary: '6318b8f20c1f1f1e4d58e2c4'
    },
    {
        name: 'Bodega Andeluna',
        photo: 'http://drive.google.com/uc?export=view&id=1qAQir7nNPPIoSWN2k99fbV2NrbkOqLjj',
        itinerary: '6318b8f20c1f1f1e4d58e2c4'
    },
    // tucumán
    {
        name: 'Circuito Histórico: Casa de Tucumán',
        photo: 'http://drive.google.com/uc?export=view&id=15H9OMDYqojpxpdk-sbrhEjcpcjkAXPOg',
        itinerary: '6318b8f20c1f1f1e4d58e2c5'
    },
    {
        name: 'Iglesia Catedral',
        photo: 'http://drive.google.com/uc?export=view&id=1GefUJ-62jVoolYK3FNBcwGgSzPN7yFWW',
        itinerary: '6318b8f20c1f1f1e4d58e2c5'
    },
    {
        name: 'Parque Nacional Aconquija',
        photo: 'http://drive.google.com/uc?export=view&id=1OZVkpejsVqYB8Vve1LH4SjdulHpKSwPj',
        itinerary: '6318b8f20c1f1f1e4d58e2c5'
    }
)
