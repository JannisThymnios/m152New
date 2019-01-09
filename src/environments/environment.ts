import { DeprecatedDecimalPipe } from "@angular/common";
import { defineDirective } from "@angular/core/src/render3";

export const environment = {
  production: false,

  mountains: {
    type: 'FeatureCollection',
    features: [
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.005382, 46.577555 ]
     },
     properties: {
     id: 'eig',
     name: 'Eiger',
     el: 3967,
     url: '/e4/pages/eiger.php',
     img: './assets/img/eiger.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates: [ 9.020156, 45.931455 ]
     },
     properties: {
     id: 'mge',
     name: 'Monte Generoso',
     el: 1701,
     url: '/e4/pages/generoso.php',
     img: './assets/img/generoso.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 7.658434, 45.976653 ]
     },
     properties: {
     id: 'mat',
     name: 'Matterhorn',
     el: 4477,
     url: '/e4/pages/matterhorn.php',
     img: './assets/img/matterhorn.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.681283, 46.73697 ]
     },
     properties: {
     id: 'bri',
     name: 'Bristen',
     el: 3073,
     url: '/e4/pages/bristen.php',
     img: './assets/img/bristen.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 7.775339, 46.711302 ]
     },
     properties: {
     id: 'nie',
     name: 'Niederhorn',
     el: 1963,
     url: '/e4/pages/niederhorn.php',
     img: './assets/img/niederhorn.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 9.908117, 46.382328 ]
     },
     properties: {
     id: 'pbe',
     name: 'Piz Bernina',
     el: 4049,
     url: '/e4/pages/pizbernina.php',
     img: './assets/img/pizbernina.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.485215, 47.056731 ]
     },
     properties: {
     id: 'rig',
     name: 'Rigi',
     el: 1798,
     url: '/e4/pages/rigi.php',
     img: './assets/img/rigi.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 9.343259, 47.249403 ]
     },
     properties: {
     id: 'san',
     name: 'Säntis',
     el: 2502,
     url: '/e4/pages/santis.php',
     img: './assets/img/santis.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.437769, 46.772067 ]
     },
     properties: {
     id: 'tit',
     name: 'Titlis',
     el: 3238,
     url: '/e4/pages/titlis.php',
     img: './assets/img/titlis.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.914868, 46.811151 ]
     },
     properties: {
     id: 'tod',
     name: 'Tödi',
     el: 3614,
     url: '/e4/pages/todi.php',
     img: './assets/img/todi.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 9.221249, 46.898255 ]
     },
     properties: {
     id: 'tsh',
     name: 'Tschingelhörner',
     el: 2849,
     url: '/e4/pages/tschingelhorner.php',
     img: './assets/img/tschingelhorner.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.49205, 47.349499 ]
     },
     properties: {
     id: 'uet',
     name: 'Uetliberg',
     el: 870,
     url: '/e4/pages/uetliberg.php',
     img: './assets/img/uetliberg.jpg',
     mountainrailway: true
     }
   },
   {
    type: 'Feature',
    geometry: {
       type: 'Point',
       coordinates:  [ 8.988836, 46.992828 ]
    },
    properties: {
    id: 'gla',
    name: 'foo foo',
    el: 2914,
    url: '/e4/pages/glarnisch.php',
    img: './assets/img/glarnisch.jpg',
    mountainrailway: true
    }
  }
 ]
 },

 /*clubs: {
  type: 'FeatureCollection',
  features: [
 {
   type: 'Feature',
   properties: {
   id: '1001',
   name: 'HC Ambrì Piotta',
   gruendung: 1937,
   headcoach: 'Luca Cereda',
   gsf: 'Michele Orsi',
   sportchef: 'Paolo Duca',
   stadion: 'Valascia',
   sitz: 2000,
   steh: 4500,
   adresse: 'Casella Postale',
   plz: 6775,
   ort: 'Ambri',
   email: 'info@hcap.ch',
   logo: './assets/clubImages/amb-logo.png',
   photo: './assets/clubImages/ambri-photo.jpg'
   }
 },
 {
  type: 'Feature',
  properties: {
  id: '1002',
  name: 'SC Bern',
  gruendung: 1931,
  headcoach: 'Kari Jalonen',
  gsf: 'Marc Lüthi',
  sportchef: 'Alex Chatelain',
  stadion: 'PostFinance-Arena',
  sitz: 7139,
  steh: 9892,
  adresse: 'Mingerstrasse 12B',
  plz: 3014,
  ort: 'Bern',
  email: 'info@scb.ch',
  logo: './assets/clubImages/ber-logo.png',
  photo: './assets/clubImages/bern-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1003',
  name: 'EHC Biel',
  gruendung: 1939,
  headcoach: 'Antti Törmänen',
  gsf: 'Daniel Villard',
  sportchef: 'Martin Steinegger',
  stadion: 'Tissot Arena',
  sitz: 4411,
  steh: 2110,
  adresse: 'Bahnhofstrasse 17',
  plz: 2501,
  ort: 'Biel',
  email: 'hotline@ehcb.ch',
  logo: './assets/clubImages/bie-logo.png',
  photo: './assets/clubImages/biel-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1004',
  name: 'HC Davos',
  gruendung: 1921,
  headcoach: '',
  gsf: 'Gaudenz F. Domenig',
  sportchef: 'René Müller',
  stadion: 'Vaillant Arena',
  sitz: 3395,
  steh: 3400,
  adresse: 'Eisbahnstrasse 2',
  plz: 7270,
  ort: 'Davos Platz',
  email: 'nfo@hcd.ch',
  logo: './assets/clubImages/dav-logo.png',
  photo: './assets/clubImages/davos-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1005',
  name: 'Fribourg-Gottéron',
  gruendung: 1938,
  headcoach: 'Mark French',
  gsf: 'Raphaël Berger',
  sportchef: 'Christian Dubé',
  stadion: 'BCF-Arena',
  sitz: 3174,
  steh: 3526,
  adresse: 'CP 551',
  plz: 1701,
  ort: 'Fribourg',
  email: 'office@fribourg-gotteron.ch',
  logo: './assets/clubImages/fri-logo.png',
  photo: './assets/clubImages/fribourg-photo.jpg.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1006',
  name: 'Genève-Servette HC',
  gruendung: 1905,
  headcoach: 'Chris McSorley',
  gsf: 'Christophe Stuck',
  sportchef: 'Chris McSorley',
  stadion: 'Les Vernets',
  sitz: 4479,
  steh: 2656,
  adresse: 'Routes des jeunes 10',
  plz: 1227,
  ort: 'Genf',
  email: 'nfo@gshc.ch',
  logo: './assets/clubImages/gen-logo.png',
  photo: './assets/clubImages/genf-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1007',
  name: 'SCL Tigers',
  gruendung: 1946,
  headcoach: 'Heinz Ehlers',
  gsf: 'Peter Müller',
  sportchef: 'Marco Bayer',
  stadion: 'Ilfishalle',
  sitz: 2943,
  steh: 3107,
  adresse: 'Güterstrasse 18',
  plz: 3550,
  ort: 'Langnau',
  email: 'nfo@scltigers.ch',
  logo: './assets/clubImages/lan-logo.png',
  photo: './assets/clubImages/langnau-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1008',
  name: 'Lausanne HC',
  gruendung: 1922,
  headcoach: 'Ville Peltonen',
  gsf: 'Sacha Weibel',
  sportchef: 'Jan Alston',
  stadion: 'Malley',
  sitz: 4610,
  steh: 2090,
  adresse: 'Case Postale 171',
  plz: 1000,
  ort: 'Lausanne',
  email: 'contact@lausannehc.ch',
  logo: './assets/clubImages/lau-logo.png',
  photo: './assets/clubImages/lausanne-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1009',
  name: 'HC Lugano',
  gruendung: 1941,
  headcoach: 'Greg Ireland',
  gsf: 'Jean-Jacques Aeschlimann',
  sportchef: 'Roland Habisreutinger',
  stadion: 'Cornèr Arena',
  sitz: 4200,
  steh: 3000,
  adresse: 'Casella postale 4226',
  plz: 6904,
  ort: 'Lugano',
  email: 'sede@hclugano.ch',
  logo: './assets/clubImages/lug-logo.png',
  photo: './assets/clubImages/lugano-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1010',
  name: 'SC Rapperswil-Jona Lakers',
  gruendung: 1945,
  headcoach: 'Jeff Tomlinson',
  gsf: 'Markus Bütler',
  sportchef: 'Roger Maier',
  stadion: 'St. Galler Kantonalbank Arena',
  sitz: 4000,
  steh: 2100,
  adresse: 'Walter-Denzler-Strasse 3',
  plz: 8640,
  ort: 'Rapperswil',
  email: 'iinfo@lakers.ch',
  logo: './assets/clubImages/rap-log.png',
  photo: './assets/clubImages/rapperswil-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1011',
  name: 'ZSC Lions',
  gruendung: 1930,
  headcoach: 'Serge Aubin',
  gsf: 'Peter Zahner',
  sportchef: 'Sven Leuenberger',
  stadion: 'Hallenstadion',
  sitz: 11200,
  steh: 0,
  adresse: 'Siewerdtstrasse 105',
  plz: 8050,
  ort: 'Zürich',
  email: 'info@zsclions.ch',
  logo: './assets/clubImages/zur-logo.png',
  photo: './assets/clubImages/zuerich-photo.jpg'
  }
},
{
  type: 'Feature',
  properties: {
  id: '1012',
  name: 'EV Zug',
  gruendung: 1967,
  headcoach: 'Dan Tangnes',
  gsf: 'Patrick Lengwiler',
  sportchef: 'Reto Kläy',
  stadion: 'Bossard Arena',
  sitz: 4848,
  steh: 2352,
  adresse: 'Weststrasse 11',
  plz: 6303,
  ort: 'Zug',
  email: 'info@evz.ch',
  logo: './assets/clubImages/zug-logo.png',
  photo: './assets/clubImages/zug-photo.jpg'
  }
},
]
}*/
clubs: [
  [
    '1001',
    'HC Ambrì Piotta',
    '1937',
    'Luca Cereda',
    'Michele Orsi',
    'Paolo Duca',
    'Valascia',
    '2000',
    '4500',
    'Casella Postale',
    '6775',
    'Ambri',
    'info@hcap.ch',
    './assets/clubImages/amb-logo.png',
    './assets/clubImages/ambri-photo.jpg'
  ],
  [
    '1002',
    'SC Bern',
    '1931',
    'Kari Jalonen',
    'Marc Lüthi',
    'Alex Chatelain',
    'PostFinance-Arena',
    '7139',
    '9892',
    'Mingerstrasse 12B',
    '3014',
    'Bern',
    'info@scb.ch',
    './assets/clubImages/ber-logo.png',
    './assets/clubImages/bern-photo.jpg'
  ],
  [
    '1003',
    'EHC Biel',
    '1939',
    'Antti Törmänen',
    'Daniel Villard',
    'Martin Steinegger',
    'Tissot Arena',
    '4411',
    '2110',
    'Bahnhofstrasse 17',
    '2501',
    'Biel',
    'hotline@ehcb.ch',
    './assets/clubImages/bie-logo.png',
    './assets/clubImages/biel-photo.jpg'
  ],
  [
    '1004',
    'HC Davos',
    '1921',
    '',
    'Gaudenz F. Domenig',
    'René Müller',
    'Vaillant Arena',
    '3395',
    '3400',
    'Eisbahnstrasse 2',
    '7270',
    'Davos Platz',
    'nfo@hcd.ch',
    './assets/clubImages/dav-logo.png',
    './assets/clubImages/davos-photo.jpg'
  ],
  [
    '1005',
    'Fribourg-Gottéron',
    '1938',
    'Mark French',
    'Raphaël Berger',
    'Christian Dubé',
    'BCF-Arena',
    '3174',
    '3526',
    'CP 551',
    '1701',
    'Fribourg',
    'office@fribourg-gotteron.ch',
    './assets/clubImages/fri-logo.png',
    './assets/clubImages/fribourg-photo.jpg'
   ],
  [
    '1006',
    'Genève-Servette HC',
    '1905',
    'Chris McSorley',
    'Christophe Stuck',
    'Chris McSorley',
    'Les Vernets',
    '4479',
    '2656',
    'Routes des jeunes 10',
    '1227',
    'Genf',
    'nfo@gshc.ch',
    './assets/clubImages/gen-logo.png',
    './assets/clubImages/genf-photo.jpg'
  ],
  [
    '1007',
    'SCL Tigers',
    '1946',
    'Heinz Ehlers',
    'Peter Müller',
    'Marco Bayer',
    'Ilfishalle',
    '2943',
    '3107',
    'Güterstrasse 18',
    '3550',
    'Langnau',
    'nfo@scltigers.ch',
    './assets/clubImages/lan-logo.png',
    './assets/clubImages/langnau-photo.jpg'
  ],
  [
    '1008',
    'Lausanne HC',
    '1922',
    'Ville Peltonen',
    'Sacha Weibel',
    'Jan Alston',
    'Malley',
    '4610',
    '2090',
    'Case Postale 171',
    '1000',
    'Lausanne',
    'contact@lausannehc.ch',
    './assets/clubImages/lau-logo.png',
    './assets/clubImages/lausanne-photo.jpg'
  ],
  [
    '1009',
    'HC Lugano',
    '1941',
    'Greg Ireland',
    'Jean-Jacques Aeschlimann',
    'Roland Habisreutinger',
    'Cornèr Arena',
    '4200',
    '3000',
    'Casella postale 4226',
    '6904',
    'Lugano',
    'sede@hclugano.ch',
    './assets/clubImages/lug-logo.png',
    './assets/clubImages/lugano-photo.jpg'
  ],
  [
    '1010',
    'SC Rapperswil-Jona Lakers',
    '1945',
    'Jeff Tomlinson',
    'Markus Bütler',
    'Roger Maier',
    'St. Galler Kantonalbank Arena',
    '4000',
    '2100',
    'Walter-Denzler-Strasse 3',
    '8640',
    'Rapperswil',
    'info@lakers.ch',
    './assets/clubImages/rap-log.png',
    './assets/clubImages/rapperswil-photo.jpg'
  ],
  [
    '1011',
    'ZSC Lions',
    '1930',
    'Serge Aubin',
    'Peter Zahner',
    'Sven Leuenberger',
    'Hallenstadion',
    '11200',
    '0',
    'Siewerdtstrasse 105',
    '8050',
    'Zürich',
    'info@zsclions.ch',
    './assets/clubImages/zur-logo.png',
    './assets/clubImages/zuerich-photo.jpg'
  ],
  [
    '1012',
    'EV Zug',
    '1967',
    'Dan Tangnes',
    'Patrick Lengwiler',
    'Reto Kläy',
    'Bossard Arena',
    '4848',
    '2352',
    'Weststrasse 11',
    '6303',
    'Zug',
    'info@evz.ch',
    './assets/clubImages/zug-logo.png',
    './assets/clubImages/zug-phot.jpg'
  ]
],

championship: [
  ['1938', 'HC Davos', '1004'],
  ['1939', 'HC Davos', '1004'],
  ['1940', '', ''],
  ['1941', 'HC Davos', '1004'],
  ['1942', 'HC Davos', '1004'],
  ['1943', 'HC Davos', '1004'],
  ['1944', 'HC Davos', '1004'],
  ['1945', 'HC Davos', '1004'],
  ['1946', 'HC Davos', '1004'],
  ['1947', 'HC Davos', '1004'],
  ['1948', 'HC Davos', '1004'],
  ['1949', 'ZSC Lions', '1011'],
  ['1950', 'HC Davos', '1004'],
  ['1951', 'EHC Arosa', '2006'],
  ['1952', 'EHC Arosa', '2006'],
  ['1953', 'EHC Arosa', '2006'],
  ['1954', 'EHC Arosa', '2006'],
  ['1955', 'EHC Arosa', '2006'],
  ['1956', 'EHC Arosa', '2006'],
  ['1957', 'EHC Arosa', '2006'],
  ['1958', 'HC Davos', '1004'],
  ['1959', 'SC Bern', '1002'],
  ['1960', 'HC Davos', '1004'],
  ['1961', 'ZSC Lions', '1011'],
  ['1962', 'EHC Visp', '2004'],
  ['1963', 'HC Villars', '2001'],
  ['1964', 'HC Villars', '2001'],
  ['1965', 'SC Bern', '1002'],
  ['1966', 'GC Zürich', '2003'],
  ['1967', 'EHC Kloten', '2005'],
  ['1968', 'HC La Chaux-de-Fonds', '2002'],
  ['1969', 'HC La Chaux-de-Fonds', '2002'],
  ['1970', 'HC La Chaux-de-Fonds', '2002'],
  ['1971', 'HC La Chaux-de-Fonds', '2002'],
  ['1972', 'HC La Chaux-de-Fonds', '2002'],
  ['1973', 'HC La Chaux-de-Fonds', '2002'],
  ['1974', 'SC Bern', '1002'],
  ['1975', 'SC Bern', '1002'],
  ['1976', 'SCL Tigers', '1007'],
  ['1977', 'SC Bern', '1002'],
  ['1978', 'EHC Biel', '1003'],
  ['1979', 'SC Bern', '1002'],
  ['1980', 'EHC Arosa', '2006'],
  ['1981', 'EHC Biel', '1003'],
  ['1982', 'EHC Arosa', '2006'],
  ['1983', 'EHC Biel', '1003'],
  ['1984', 'HC Davos', '1004'],
  ['1985', 'HC Davos', '1004'],
  ['1986', 'HC Lugano', '1009'],
  ['1987', 'HC Lugano', '1009'],
  ['1988', 'HC Lugano', '1009'],
  ['1989', 'SC Bern', '1002'],
  ['1990', 'HC Lugano', '1009'],
  ['1991', 'SC Bern', '1002'],
  ['1992', 'SC Bern', '1002'],
  ['1993', 'EHC Kloten', '2005'],
  ['1994', 'EHC Kloten', '2005'],
  ['1995', 'EHC Kloten', '2005'],
  ['1996', 'EHC Kloten', '2005'],
  ['1997', 'SC Bern', '1002'],
  ['1998', 'EV Zug', '1012'],
  ['1999', 'HC Lugano', '1009'],
  ['2000', 'ZSC Lions', '1011'],
  ['2001', 'ZSC Lions', '1011'],
  ['2002', 'HC Davos', '1004'],
  ['2003', 'HC Lugano', '1009'],
  ['2004', 'SC Bern', '1002'],
  ['2005', 'HC Davos', '1004'],
  ['2006', 'HC Lugano', '1009'],
  ['2007', 'HC Davos', '1004'],
  ['2008', 'ZSC Lions', '1011'],
  ['2009', 'HC Davos', '1004'],
  ['2010', 'SC Bern', '1002'],
  ['2011', 'HC Davos', '1004'],
  ['2012', 'ZSC Lions', '1011'],
  ['2013', 'SC Bern', '1002'],
  ['2014', 'ZSC Lions', '1011'],
  ['2015', 'HC Davos', '1004'],
  ['2016', 'SC Bern', '1002'],
  ['2017', 'SC Bern', '1002'],
  ['2018', 'ZSC Lions', '1011']
]



};
