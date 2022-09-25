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
        photo: 'http://drive.google.com/uc?export=view&id=1UbE3qbX1LgkZCCe5MzbOWCHrGq8iRirf',
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
    },
    // calafate
    {
        name: 'Laguna Torre',
        photo: 'http://drive.google.com/uc?export=view&id=1DrZTALFn_vJjlFK5KRfPTMcmtZvG5vf4',
        itinerary: '6319da0033ca9fa170cf4266'
    },
    {
        name: 'Monte Fitz Roy',
        photo: 'http://drive.google.com/uc?export=view&id=1yJ84ERBlV49upa8TzzWJXcxw71dw7C8e',
        itinerary: '6319da0033ca9fa170cf4266'
    },
    {
        name: 'Corrillo del Salto',
        photo: 'http://drive.google.com/uc?export=view&id=1vN1WP_VisxbJGDp8iQEDtHXHDsgoUakr',
        itinerary: '6319da0033ca9fa170cf4266'
    },
    // bariloche
    {
        name: 'Civic center historic walk',
        photo: 'http://drive.google.com/uc?export=view&id=1W_7r4fomanUzrVghh4dvNqRWNTq4pVVW',
        itinerary: '6319da0033ca9fa170cf4267'
    },
    {
        name: 'Fenoglio chocolate',
        photo: 'http://drive.google.com/uc?export=view&id=1Goh4EcMRPYbXKMogyxSO_5QX41vPFkvS',
        itinerary: '6319da0033ca9fa170cf4267'
    },
    {
        name: 'Llao llao hotel',
        photo: 'http://drive.google.com/uc?export=view&id=1Gj9tzcDVmfMNZCls3BSM-uNM_PsRJxOD',
        itinerary: '6319da0033ca9fa170cf4267'
    },
    {
        name: 'Correntoso lake',
        photo: 'http://drive.google.com/uc?export=view&id=1rq3OV-R_z7AvvekOs1VMH0Jx7dMBKqKu',
        itinerary: '6319da0033ca9fa170cf4268'
    },
    {
        name: 'Espejo lake',
        photo: 'http://drive.google.com/uc?export=view&id=172E2SCqQmxeS0RA_2nvTiAPa--oZmbfa',
        itinerary: '6319da0033ca9fa170cf4268'
    },
    {
        name: 'Nahuel Huapi lake',
        photo: 'http://drive.google.com/uc?export=view&id=1YgfN3IhovyMAXMmj8GqeC2vdo7vdNM9x',
        itinerary: '6319da0033ca9fa170cf4268'
    },
    // villa la angostura
    {
        name: 'Catamaran trip',
        photo: 'http://drive.google.com/uc?export=view&id=1_4AqNJu_egE61p_miiXG5vKrb6vzaITp',
        itinerary: '6319da0033ca9fa170cf4269'
    },
    {
        name: 'Isla Victoria',
        photo: 'http://drive.google.com/uc?export=view&id=1KaTjGP2WYsnraJrh47eE3ldFHd7-bz7U',
        itinerary: '6319da0033ca9fa170cf4269'
    },
    {
        name: 'Arrayanes forest',
        photo: 'http://drive.google.com/uc?export=view&id=1fh_8w-2BZ6bnMF5iUW8I9D-zqBTqfW5d',
        itinerary: '6319da0033ca9fa170cf4269'
    },
    {
        name: 'Bike tour',
        photo: 'http://drive.google.com/uc?export=view&id=1m-SmOod9U_JJNjvhm0K4k4mmszUrA4P_',
        itinerary: '6319da0033ca9fa170cf426a'
    },
    {
        name: 'Correntoso and Espejo lake',
        photo: 'http://drive.google.com/uc?export=view&id=1mwGCZycTD0-9EvTHS1lfJggyfBe-EX58',
        itinerary: '6319da0033ca9fa170cf426a'
    },
    {
        name: 'Luncha al Bosque Chocolate',
        photo: 'http://drive.google.com/uc?export=view&id=1uGUWSX2hZxBkK9taaRBywjyIjIuWREQw',
        itinerary: '6319da0033ca9fa170cf426a'
    },
    // ushuaia
    {
        name: 'Tourist trip on the train',
        photo: 'http://drive.google.com/uc?export=view&id=18ifYMhP2fOeyUivO5IwpFh3qik4Ley5P',
        itinerary: '6319da0033ca9fa170cf426b'
    },
    {
        name: 'Parque Nacional Tierra del Fuego',
        photo: 'http://drive.google.com/uc?export=view&id=1KpLvwWKoMear_S0Kf_3fQIWcWEk2bko8',
        itinerary: '6319da0033ca9fa170cf426b'
    },
    {
        name: 'Lunch at the train bar',
        photo: 'http://drive.google.com/uc?export=view&id=1JdZkhFQHP6z5vHjwm_bK9F5miLsdDELl',
        itinerary: '6319da0033ca9fa170cf426b'
    },
    // Córdoba
    {
        name: 'Chairlift to Cerro de la cruz',
        photo: 'http://drive.google.com/uc?export=view&id=1xPXCwQ-ky4nto7chZKiZxuQHoks6uJPF',
        itinerary: '6319da0033ca9fa170cf426c'
    },
    {
        name: 'Cucú clock',
        photo: 'http://drive.google.com/uc?export=view&id=1idtF_7yZveFdogQu_cHc5JpNeXQRGbgq',
        itinerary: '6319da0033ca9fa170cf426c'
    },
    {
        name: 'City ​​bike ride',
        photo: 'http://drive.google.com/uc?export=view&id=15oMjhA5b6DcH7xepaJcdb2LkCOZiSqAz',
        itinerary: '6319da0033ca9fa170cf426c'
    },
    {
        name: 'Quebrada del Condorito National Park',
        photo: 'http://drive.google.com/uc?export=view&id=1hfjIo-I1mhlh5Pty100p7E0xhudv8Gnh',
        itinerary: '6319da0033ca9fa170cf426d'
    },
    {
        name: 'Lágrima del Indio waterfall',
        photo: 'http://drive.google.com/uc?export=view&id=1ajFZqD3ISppZldvT2moDjHVGvnWgXOWT',
        itinerary: '6319da0033ca9fa170cf426d'
    },
    {
        name: 'Quebrada del Batan Viewpoint',
        photo: 'http://drive.google.com/uc?export=view&id=1I_ycqK8jQxCnHi6gWsKEYBuHvfqa-ACl',
        itinerary: '6319da0033ca9fa170cf426d'
    }
)