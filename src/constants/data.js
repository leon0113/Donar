/* eslint-disable no-unused-vars */
// import images from './images';

const menu = [
  {
    image: "https://i.ibb.co/WGFdS1B/KEBAB-PITALEIVALLA-removebg-preview.png",
    choose: "valitse liha: voner/falafel",
    title: 'KEBAB PITALEIVALLA',
    price: '€9,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/sC3Qzhp/DONER-JR-BOX-1-removebg-preview-2.png",
    choose: "valitse liha: nauta/kana",
    title: 'DONER BOX JR',
    price: '€7,50',
    tags: 'tomaattikastiketta | ranskalaiset | ketsuppi',
  },
  {
    image: "https://i.ibb.co/HCGyRFZ/KEBAB-RIISILLA.png",
    choose: "valitse liha: nauta/kana",
    title: 'KEBAB RIISILLA',
    price: '€10,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/FDbQQrD/Kana-Ranskalaisilla-removebg-preview.png",
    choose: "valitse liha: nauta/kana",
    title: 'KEBAB RANSKALAISILLA',
    price: '€10,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/kyqgyN9/RULLA-KEBAB-removebg-preview-2.png",
    choose: "valitse liha: nauta/kana",
    title: 'RULLAKEBAB',
    price: '€11,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/kyqgyN9/RULLA-KEBAB-removebg-preview-2.png",
    choose: "valitse liha: nauta/kana",
    title: 'RULLAKEBAB FETA TAI AURAJUUSTOLLA',
    price: '€13,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/1zMJrSC/ISKANDER-KEBAB-removebg-preview-1.png",
    choose: "valitse liha: nauta/kana",
    title: 'ISKENDER',
    price: '€11,90',
    tags: 'paahdettua pide-leipa kuutiota | tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali |  marinoitu punasipuli | yrtit',
  },
  {
    image: "https://i.ibb.co/WzYSbYY/TALON-SPESSU-removebg-preview-2.png",
    choose: "valitse proteiini: nauta/voner/falafel,ranskalaiset",
    title: 'TALON SPESSU',
    price: '€13,50',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli | hommusta | fetamurua | yrtit | paahdettua pide-leipaa',
  },
];

const pizzat = [
  {
    image: "https://i.ibb.co/wJZWxbq/PIZZA-CLASSIC-BOLOGNESE-removebg-preview-2.png",
    title: 'CLASSIC BOLOGNESE',
    price: '€10,20',
    tags: 'home made jauheliha kastike',
  },
  {
    image: "https://i.ibb.co/vjsgXHy/1-B-Margarita-1536x1024-removebg-preview-2.png",
    title: 'PIZZA MARGHERITA',
    price: '€10,80',
    tags: 'tuore tomaatti | mozzarella | rucola',
  },
  {
    image: "https://i.ibb.co/T2bkLTw/PIZZA-Doner-special-removebg-preview-2.png",
    title: 'PIZZA DONER SPECIAL',
    price: '€12,80',
    tags: 'kebab | punasipuli | chilli | tomatti | feta',
  },
  {
    image: "https://i.ibb.co/5jpP4nQ/PIZZA-NAPOLI-removebg-preview-2.png",
    title: 'PIZZA NAPOLI',
    price: '€12,20',
    tags: 'katkarapu | aurajuusto | rucola',
  },
  {
    image: "https://i.ibb.co/PtHfcL7/PIZZA-CHICKEN-BBQ-removebg-preview-2.png",
    title: 'PIZZA CHICKEN BBQ',
    price: '€12,80',
    tags: 'kana | punasipuli | mozzarella | rucola | bbq-kastike',
  },
  {
    image: "https://i.ibb.co/S0Ks4VT/PIZZA-SALAMI-removebg-preview.png",
    title: 'PIZZA SALAMI',
    price: '€10,80',
    tags: 'tupla salami',
  },
  {
    image: "https://i.ibb.co/WgxzmDL/PIZZA-GREEN-DAY-removebg-preview-3.png",
    title: 'PIZZA GREEN DAY',
    price: '€10,80',
    tags: 'paprika | punasipuli | kapris | kirsikka tomaatti | rucola',
  },
  {
    image: "https://i.ibb.co/Ld0QNTD/PIZZA-FANTASIA-removebg-preview.png",
    title: 'PIZZA FANTASIA',
    price: '€12,80',
    tags: 'oma valinta neljalla taytteella',
  },
  {
    image: "https://i.ibb.co/6vsNPsM/PIZZA-PEPPERONI-removebg-preview-2.png",
    title: 'PIZZA PEPPERONI',
    price: '€9,90',
    tags: 'tupla pepperoni',
  },
  {
    image: "https://i.ibb.co/ry3yJ1G/Capture-removebg-preview.png",
    title: 'PIZZA MEXICANA SPECIAL',
    price: '€12,90',
    tags: 'jauheliha | pepperoni | jalopeno | paprika | chilikastike',
  },
  {
    image: "https://i.ibb.co/J76vsZ5/PIZZA-DILLINGER-removebg-preview-2.png",
    title: 'PIZZA DILLINGER',
    price: '€12,90',
    tags: 'salami | jauheliha | pepperoni | sipuli',
  },
  {
    image: "https://i.ibb.co/WpZWJZ0/PIZZA-CHICKEN-HAWAI-2-removebg-preview.png",
    title: 'PIZZA CHICKEN HAWAII',
    price: '€11,90',
    tags: 'kana | ananas | aurajuusto',
  },
  {
    image: "https://i.ibb.co/93p1FK0/PIZZA-ROMEO-1-removebg-preview-2.png",
    title: 'PIZZA ROMEO',
    price: '€12,90',
    tags: 'salami | ananas | aurajuusto | katkarapu',
  },
];

const lisätäyttet = [
  {
    image: "https://i.ibb.co/F0MGPdr/IMG-20240507-010034-removebg-preview.png",
    title: 'LIHA',
    price: '€1,50',
    tags: 'pepperoni | salami | kebab | kana',
  },
  {
    image: "https://i.ibb.co/y5GVv4d/IMG-20240507-005950-removebg-preview.png",
    title: 'KALA',
    price: '€1,50',
    tags: 'katkarapu',
  },
  {
    image: "https://i.ibb.co/LkWqTKW/IMG-20240507-010119-removebg-preview.png",
    title: 'KASVIS',
    price: '€1,50',
    tags: 'aura justo | ananas | olive | jelpeno | tomatti | feta',
  },
];

const vegeMenu = [
  {
    image: "https://i.ibb.co/85sgFGr/PITA-LEIVALLA-VONER-FALAFEL-removebg-preview-2-removebg-preview.png",
    choose: "valitse liha: vöner/falafel",
    title: 'PITALEIVALLA',
    price: '€9,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/dMt12f3/Voner-Risilla-removebg-preview-2.png",
    choose: "valitse liha: vöner/falafel",
    title: 'RIISILLA / RANSKALAISILLA',
    price: '€10,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
];

const salaatit = [
  {
    image: "https://i.ibb.co/HHbyYkP/Ceaser-SALATTI-r.png",
    choose: "valitse: kana / katkarapu",
    title: 'CAESAR SALAATTI',
    price: '€12,90',
    tags: '',
  },
  {
    image: "https://i.ibb.co/LxQ8x0n/KEBAB-SALATTI-removebg-preview-2.png",
    choose: "valitse: nauta / kana",
    title: 'KEBAB SALAATTI',
    price: '€10,50',
    tags: '',
  },
  {
    image: "https://i.ibb.co/YkrCDkr/GREEK-SALATTI-removebg-preview-2.png",
    choose: "",
    title: 'GREEK SALAATTI',
    price: '€11,80',
    tags: 'fetajuusto | oliivi | salaatti | tomaatti | kurkku | rucola | pestokastike',
  },
];

const extrat2 = [
  {
    image: "https://i.ibb.co/fMPY1TG/TUPLA-LIHA-Nauta-kana-removebg-preview.png",
    choose: "",
    title: 'TUPLALIHA KANA',
    price: '€4,00',
    tags: '',
  },
  {
    image: "https://i.ibb.co/NrCMkWP/IMG-20240507-012327.jpg",
    choose: "",
    title: 'JUSTO / AURA / FETA',
    price: '€2,00',
    tags: '',
  },
  {
    image: "https://i.ibb.co/QHt2dJr/IMG-20240507-012211.jpg",
    choose: "",
    title: 'RANSKA',
    price: '€3,50',
    tags: '',
  },
  {
    image: "https://i.ibb.co/XsKvn9w/IMG-20240507-012228.jpg",
    choose: "",
    title: 'VONER / FALAFEL',
    price: '€4,00',
    tags: '',
  },
  {
    image: "https://i.ibb.co/S3hdXGr/IMG-20240507-012308-removebg-preview-2.png",
    choose: "",
    title: 'Gluteeniton Pizzapohja',
    price: '€3,00',
    tags: '',
  },

];

const drinks = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MpMqT1q2rr7-lkBgm9iAqnuDmKUHTzVqd3Om-5jYig&s",
    choose: "",
    title: 'Coca - cola ------- 330ml/500ml/1.5L',
    price: '€2,50/4,00/6,00',
    tags: '',
  },
  {
    image: "https://assets.superliquor.co.nz/thumbs/0007813.jpeg",
    choose: "",
    title: 'Coca-cola zero ----- 330ml/500ml/1.5L',
    price: '€2,50/4,00/6,00',
    tags: '',
  },
  {
    image: "https://target.scene7.com/is/image/Target/GUEST_d20d55ba-2140-40ce-9899-484a25ba090c?wid=488&hei=488&fmt=pjpeg",
    choose: "",
    title: 'Sprite zero - 330ml',
    price: '€2,50',
    tags: '',
  },
  {
    image: "https://c8.alamy.com/comp/2HNT5TT/fanta-orange-lemonade-soft-drink-in-a-plastic-bottle-on-ice-cubes-portrait-format-2HNT5TT.jpg",
    choose: "",
    title: 'Fanta (applesini) - 330ml',
    price: '€2,50',
    tags: '',
  },
  {
    image: "https://assets.superliquor.co.nz/thumbs/0005404.jpeg",
    choose: "",
    title: 'Fanta - 500ml',
    price: '€4,00',
    tags: '',
  },
]

export default { menu, pizzat, lisätäyttet, vegeMenu, salaatit, extrat2, drinks };
