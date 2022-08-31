require('dotenv').config();
const db = require('./config/database')
const City = require('./models/City')

City.create({
    city: 'La Falda',
    province: 'Córdoba',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1Zq6t_G9QlKzcHecGFZC9HehXwWQY-m00',
    population: 35821,
    fundation: '1913',
    description: `La Falda  is a town in the province of Córdoba, Argentina, located 79 km (49 mi) from Córdoba and 800 km from Buenos Aires. La Falda lies at the foot of two small mountains (Cerro El Cuadrado and Cerro La Banderita in the mountain range of Sierras Chicas), and it is part of an important tourist circuit of the province (the Punilla Valley). The Punilla Department includes other tourist sites like Villa Carlos Paz, Los Cocos, La Cumbre and Capilla del Monte. 
    Is part of Gran Córdoba, is the third most visited city in Punilla (this area is knows as Valle de Punilla) which is the second most visited destiny in Argentina.
    Actually is known for two important national festivals in the city: Tango National Festival (in july) and "Alfajor" National Festival (in october.`
})

City.create({
    city: 'Ciudad de Buenos Aires',
    province: '(Ciudad Autónoma)',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1DDCP1TAeMzlzKW0ycXWpB0wal7Kf6qlV',
    population: 307564,
    fundation: '1536',
    description: `Buenos Aires, officially the Autonomous City of Buenos Aires, is the capital and primate city of Argentina. The city is located on the western shore of the Río de la Plata, on South America's southeastern coast. Is strongly influenced by European culture, the city is sometimes referred to as the "Paris of South America".
    With its scores of theaters and productions, the city has the busiest live theater industry in Latin America. In fact, every weekend, there are about 300 active theaters with plays, a number that places the city as 1st worldwide, more than either London, New York or Paris, cultural Meccas in themselves. The number of cultural festivals with more than 10 sites and 5 years of existence also places the city as 2nd worldwide, after Edinburgh.The Centro Cultural Kirchner (Kirchner Cultural Center), located in Buenos Aires, is the largest cultural center of Latin America, and the third worldwide.
    Buenos Aires is the home of the Teatro Colón, an internationally rated opera house. There are several symphony orchestras and choral societies. The city has numerous museums related to arts and crafts, history, fine arts, modern arts, decorative arts, popular arts, sacred art, theater and popular music, as well as the preserved homes of noted art collectors, writers, composers and artists. The city is home to hundreds of bookstores, public libraries and cultural associations (it is sometimes called "the city of books"), as well as the largest concentration of active theaters in Latin America. It has a zoo and botanical garden, a large number of landscaped parks and squares, as well as churches and places of worship of many denominations, many of which are architecturally noteworthy. The city has been a member of the UNESCO Creative Cities Network after it was named "City of Design" in 2005`
})

City.create({
    city: 'El Calafate',
    province: 'Santa Cruz',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1kGALp0t60av9-D-0v_kh3eOriMlWwN9h',
    population: 28766,
    fundation: '1927',
    description: `It is situated on the southern border of Lake Argentino, in the southwest part of the Santa Cruz Province, about 320 kilometres (200 mi) northwest of Río Gallegos. The name of the city is derived from a little bush with yellow flowers and dark blue berries that is very common in Patagonia: the calafate (Berberis buxifolia); the word comes from the word calafate, which is Spanish for 'caulk'. El Calafate is an important tourist destination as the hub to visit different parts of the Los Glaciares National Park, including Perito Moreno Glacier, Cerro Chaltén, and Cerro Torre.`
})

City.create({
    city: 'Rosario',
    province: 'Santa Fe',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1OhxTrmMrdRbcrjoJ6mq1per6aahdKSMo',
    population: 1392733,
    fundation: '1852',
    description: 'Rosario is the largest city in the central Argentina province of Santa Fe. The city is located 300 km (186 mi) northwest of Buenos Aires, on the west bank of the Paraná River. Is the third-most populous city in the country, and is also the most populous city in Argentina that is not a capital. UPDATE'
})

City.create({
    city: 'Ushuahia',
    province: 'Tierra del Fuego',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1k3yQUjvtK_EYzfdcoZcFei4wxZ3u3keH',
    population: 74752,
    fundation: '1884',
    description: `Ushuaia is the capital of Tierra del Fuego, Antártida e Islas del Atlántico Sur Province, Argentina, and the southernmost city of the country and claims the title of world's southernmost city.
    Besides being an administrative center, it is a light industrial port and tourist hub. Ushuaia is located roughly 1,100 kilometres (680 mi) from the Antarctic Peninsula and is one of five internationally recognized Antarctic gateway cities.
    Tourist attractions include the Tierra del Fuego National Park and Lapataia Bay. The park can be reached by highway, or via the End of the World Train (Tren del Fin del Mundo) from Ushuaia. The city has a museum of Yámana, English, and Argentine settlement, including its years as a prison colony. Wildlife attractions include local birds, penguins, seals and orcas, many of these species colonizing islands in the Beagle Channel. There are daily bus and boat tours to Harberton, the Bridges family compound, Estancia Harberton. Tours also visit the Les Eclaireurs Lighthouse. Les Eclaireurs is sometimes confused with the "Lighthouse at the End of the World" (Faro del fin del mundo) made famous by Jules Verne in the novel of the same name; but the latter lies some 200 mi (320 km) east of Ushuaia on Isla de los Estados (Island of the States).`
})

City.create({
    city: 'Puerto Madryn',
    province: 'Chubut',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1buqXzDnwXoZwjIm_PBM1D2kXG71Su5ew',
    population: 123582 ,
    fundation: '1865',
    description: `Puerto Madryn, also known as Madryn, is a city in the province of Chubut in Argentine Patagonia. It is the capital of the Viedma Department. Is protected by the Golfo Nuevo, which is formed by the Península Valdés and the Punta Ninfas.
    A new shopping mall in the city centre has helped tourism significantly, making Puerto Madryn a more attractive place for both international and domestic tourists visiting Patagonia. It is twinned with Nefyn, a small town on the Llŷn Peninsula in North Wales, the result of its enduring link with Welsh culture since the Welsh settlement in Argentina.
    It is an important centre for tourists visiting the natural attractions of the Península Valdés and the coast. The coastline is inhabited by marine mammals, like sea lions, elephant seals and fur seals. The peninsula also contains the most important breeding ground for Southern right whales in the world. They can be found in Golfo Nuevo and Golfo San José, protected bodies of water located between the peninsula and the Patagonian mainland. These baleen whales arrive between May and December, for mating and giving birth, because the water in the gulf is quieter and warmer than in the open sea. Orcas can also be found off the coast, in the open sea off the peninsula. They are known to beach themselves on shore to capture sea lions and elephant seals.
    The inner part of the peninsula is inhabited by rheas, guanacos and maras. A high diversity and range of birds live in the peninsula as well; at least 181 bird species, 66 of which migratory, live in the area, including the Antarctic pigeon.`,
})

City.create({
    city: 'San Miguel de Tucumán',
    province: 'Tucumán',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1i_2QDNcbsiGdIps7utlJ8jAqXJt_XDhr',
    population: 605767,
    fundation: '1565',
    description: `San Miguel de Tucumán (usually called simply Tucumán) is the capital and largest city of Tucumán Province, located in northern Argentina 1,311 kilometres (815 mi) from Buenos Aires. It is the fifth-largest city of Argentina after Buenos Aires, Córdoba, Rosario and Mendoza and the most important of the northern region. The Spanish conquistador Diego de Villarroel founded the city in 1565 in the course of an expedition from present-day Peru. Tucumán moved to its present site in 1685.
    For decades, has been one of the cultural spots in the country, in part due to the influence of the National University of Tucumán. It has been the birthplace and/or home of well-known personalities such as folk singer Mercedes Sosa, author Tomas Eloy Martínez, a professor at Rutgers University in the United States; musician Miguel Ángel Estrella, artist/architect Tomás Saraceno, painter Luis Lobo de la Vega, and many others.
    Two large theatres (San Martín and Alberdi) and several smaller and independent theaters offer a wide array of events, including plays, concerts, operas, and ballet, all year round. The Septiembre Musical is by far the most important cultural event during the year. This music festival, generally held at Independence Square, brings together several local and national artists who perform different musical styles ranging from folk music to rock.`,
})

City.create({
    city: 'Villa la Angostura',
    province: 'Neuquén',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1ZzORJA1IplX3w7OMJPGL6FOHh9X6LFxT',
    population: 18000,
    fundation: '1932',
    description: `Villa La Angostura (Spanish for Town of the Narrowing) is a town located in the Los Lagos Department in the south of the Argentine province of Neuquén, on the northwest shore of the Nahuel Huapi Lake.
    Nestled in the northern part of the Nahuel Huapi National Park, and surrounded by lakes, forests and mountains, it is considered to be one of the most beautiful locations in the mountainous parts of Patagonia; earning it the nickname Garden of Patagonia (Spanish: Jardín de la Patagonia).
    Just located a couple of kilometers away from the border with Chile through the Cardenal Antonio Samoré Pass and with other nearby places such as Bariloche and San Martín de los Andes, it forms a popular tourist corridor during both summer and winter, Road of the Seven Lakes.
    La Angostura is considered among the main attractions of Argentina's Andean Patagonia not only because of the wooden town itself, but also because of the beauty of its sights. On its west side is the Nahuel Huapi Lake, and to the east, the Correntoso Lake. Both lakes are connected by the Correntoso River, which, with 200 meters of length, is one of the sport fishing destinations around La Angostura.
    The architecture of the town follows a stylized Alpine wooden style similar to that of Bariloche's city centre. There are shops and restaurants of artisanal products such as chocolate, beer and trout. It is categorised as a mountain village, even though it has approximately 11,000 inhabitants.[citation needed]
    In June 2011, Villa La Angostura was declared a disaster area due to the massive layer of ash dumped on the community by the eruption to the west in Chile.`,
})

City.create({
    city: 'Purmamarca',
    province: 'Jujuy',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1-hwDr7FIIQaHnYoA427fuIQgh5MACCS6',
    population: 891,
    fundation: '1594',
    description: `Purmamarca is a town in the Tumbaya Department of the Jujuy Province in Argentina.
    The name of the town can be interpreted as the combination of Aymara language words purma (desert) and marca (city), though desert in that language can refer to uncivilised or not touched by human hand, thus the name is often interpreted as Town of the virgin land.
    The city's attraction include the aforementioned Cerro de los Siete Colores and the town handicraft market. It also serves as a starting point for treks such as the Paseo de los Colorados and Purmamarca River, and tours to Salinas Grandes, the Huachichocana archaeological site and the Laguna de Guayatayoc with its pink flamencos and wild geese.`,
})

City.create({
    city: 'Tupungato',
    province: 'Mendoza',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1SLaeaJrOvy0Kq5iVHjtBPkuhSxAPiHbN',
    population: 52000,
    fundation: '1658',
    description: `Tupuungato is a city in the Tupungato Deparment in the province of Mendoza. Is one of the most importants cities in the Uco's Valley.
    Valle de Uco is a viticultural region southwest of Mendoza. Situated along the Tunuyán River, is widely considered one of the top wine regions in Mendoza, and all of Argentina. The annual average temperature is 14 °C (57 °F) and altitudes range from 900–1,200 metres (3,000–3,900 ft) above sea level.
    The combination of high elevation, alluvial soils, irrigation sourced from the Andes Mountains, a long growing season with over 250 sunny days a year, little rain and vast temperature differences between day and night are all conducive to growing quality wine grapes. These climate and geography elements come together to provide excellent fruit ripening and concentration, developing colors, aromas, flavors and textures resulting in wines that are deep in color, intense in aromas and rich in flavors. The Uco Valley figures prominently in the Argentina Wine Route for tourist visitors.
    Traditionally, the varietals grown in this area are Sémillon and Malbec; together with Bonarda and Barbera in a smaller amount.`,
})

City.create({
    city: 'San Carlos de Bariloche',
    province: 'Río Negro',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1s_q_4Qw7fXaAgjY8NptJPV9E-zmwFny8',
    population: 108205,
    fundation: '1902',
    description: `San Carlos de Bariloche, usually known as Bariloche, is a city in the province of Río Negro, Argentina, situated in the foothills of the Andes on the southern shores of Nahuel Huapi Lake. It is located within the Nahuel Huapi National Park. After development of extensive public works and Alpine-styled architecture, the city emerged in the 1930s and 1940s as a major tourism centre with skiing, trekking and mountaineering facilities. In addition, it has numerous restaurants, cafés, and chocolate shops.
    Tourism, both domestic and international, is the main economic activity of Bariloche throughout the year. The city is very popular with Brazilians, Europeans and Israelis. One of the most popular activities is skiing, and most tourists visit Bariloche in winter (June–September). The main ski slopes are the ones at Cerro Catedral, the biggest ski resort in South America and in the southern hemisphere. During the summer, beautiful beaches such as Playa Bonita and Villa Tacul welcome sun-bathers; brave lake swimmers venture into its cold waters (chilled by melting snow). Lake Nahuel Huapi averages 14 °C (57 °F) in the summertime. Bariloche is the biggest city of a huge Lakes District, and it serves as a base for many excursions in the region. Activities such as fishing, whitewater rafting, and birdwatching are popular with tourists. Trekking along trails in the nearby mountain wilderness is supported by a few high-mountain huts operated by the Club Andino Bariloche. The city is also noted for its chocolates and Swiss-style architecture. Many high school students in Argentina take a senior trip to Bariloche, and the town is well prepared to host these kinds of groups. In November 2012, Bariloche was named "national capital of adventure tourism" under Law 26802 sanctioned by the Argentine National Congress.`,
})

City.create({
    city: 'Potrero de Los Funes',
    province: 'San Luis',
    country: 'Argentina',
    photo: 'http://drive.google.com/uc?export=view&id=1fQuq8wbZ7CmZnhQ6A8QkD1ASdo3eqW62',
    population: 1698,
    fundation: '1790',
    description: `Potrero de los Funes is a small touristic town in the province of San Luis, Argentina, nearest to the capital.
    Is situated in a valley at the south  of the San Luis's ranges. The highest points are the Valle de Piedra hill (1960 msnm) and the Quijada hill (1460 msnm) in the north, and the Potrero hill (1460 m.s.n.m.) in the southwest.
    Potrero de los Funes enjoys a pleasant climate almost all year round that is very favorable to tourism, especially with the attractiveness of the Potrero de los Funes Reservoir lake, which, in addition to offering beautiful landscapes, allows the practice of water sports and sport fishing. In the summer months, Potrero de los Funes is the center of the Folklore festival called El Fogón y el Lago, with local, provincial and national artists; this being one of the most recognized in the province of San Luis.
    The native park it is an area of ​​native and exotic flora, which has 7 hectares of mountain slopes and is located on the eastern margin of the Potrero de los Funes dam. Visitors can enjoy barbecues and grills, children's games, bathrooms, parking and orchard, in an artificial environment with a wide panoramic view of the cloudy water mirror and the mountains. It offers a sector for sport fishing and rides in pedal boats and kayaks. Entering the water is not allowed.`
})

