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
    image: "https://i.ibb.co/Jv1vbhf/DONER-BOX-JR-removebg-preview-2.png",
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
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
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
    image: "https://i.ibb.co/9NBdj09/TALON-SPESSU-removebg-preview-2.png",
    choose: "valitse proteiini: nauta/voner/falafel,ranskalaiset",
    title: 'TALON SPESSU',
    price: '€13,50',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli | hommusta | fetamurua | yrtit | paahdettua pide-leipaa',
  },
];

const pizzat = [
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'CLASSIC BOLOGNESE',
    price: '€10,20',
    tags: 'home made jauheliha kastike',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://i.ibb.co/xFGsBPQ/PIZZA-NAPOLI-removebg-preview-2.png",
    title: 'PIZZA NAPOLI',
    price: '€12,20',
    tags: 'katkarapu | aurajuusto | rucola',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA CHICKEN BBQ',
    price: '€12,80',
    tags: 'kana | punasipuli | mozzarella | rucola | bbq-kastike',
  },
  {
    image: "https://i.ibb.co/3CQrtGZ/PIZZA-SALAMI-removebg-preview-2.png",
    title: 'PIZZA SALAMI',
    price: '€10,80',
    tags: 'tupla salami',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA GREEN DAY',
    price: '€10,80',
    tags: 'paprika | punasipuli | kapris | kirsikka tomaatti | rucola',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA FANTASIA',
    price: '€12,80',
    tags: 'oma valinta neljalla taytteella',
  },
  {
    image: "https://i.ibb.co/6vNqcw7/Pizza-peparoni-2-removebg-preview.png",
    title: 'PIZZA PEPPERONI',
    price: '€9,90',
    tags: 'tupla pepperoni',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA MEXICANA SPECIAL',
    price: '€12,90',
    tags: 'jauheliha | pepperoni | jalopeno | paprika | chilikastike',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA DILLINGER',
    price: '€12,90',
    tags: 'salami | jauheliha | pepperoni | sipuli',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'PIZZA CHICKEN HAWAII',
    price: '€11,90',
    tags: 'kana | ananas | aurajuusto',
  },
  {
    image: "https://i.ibb.co/HVkwkJq/PIZZA-ROMEO-removebg-preview-2.png",
    title: 'PIZZA ROMEO',
    price: '€12,90',
    tags: 'salami | ananas | aurajuusto | katkarapu',
  },
];

const lisätäyttet = [
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'LIHA',
    price: '€1,50',
    tags: 'Pepperoni',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'KALA',
    price: '€1,50',
    tags: 'Katkarapu',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'KASVIS',
    price: '€1,50',
    tags: 'salami | ananas | aurajuusto | katkarapu',
  },
];


const vegeMenu = [
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse liha: vöner/falafel",
    title: 'PITALEIVALLA',
    price: '€9,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "valitse liha: vöner/falafel",
    title: 'RIISILLA / RANSKALAISILLA',
    price: '€10,90',
    tags: 'tomaattikastiketta | tzatzikia | tomaatti-kurkkusalaatti | pikkeloity punakaali | marinoitu punasipuli',
  },
]
const salaatit = [
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
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
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "",
    title: 'GREEK SALAATTI',
    price: '€11,80',
    tags: 'fetajuusto | oliivi | salaatti | tomaatti | kurkku | rucola | pestokastike',
  },
];




const extrat2 = [
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "",
    title: 'TUPLA LILA KANA',
    price: '€4,00',
    tags: '',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "",
    title: 'JUSTO / AURA / FETA',
    price: '€2,00',
    tags: '',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "",
    title: 'RANSKA',
    price: '€3,50',
    tags: '',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "",
    title: 'VONER / FALAFEL',
    price: '€4,00',
    tags: '',
  },
  {
    image: "https://i.ibb.co/5FN2qHk/burger1.jpg",
    choose: "",
    title: 'TO BE ADDED LATER',
    price: '€3,00',
    tags: '',
  },

];


const drinks = [
  {
    image: "https://i.ibb.co/27Gq74H/coke.jpg",
    choose: "",
    title: 'Coca-cola ___ 330ml/500ml/1.5L',
    price: '€ 2,50/4,00/6,00',
    tags: '',
  },
  {
    image: "https://i.ibb.co/5KwbXTd/coke-zero.jpg",
    choose: "",
    title: 'Coca-cola zero ___ 330ml/500ml/1.5L',
    price: '€ 2,50/4,00/6,00',
    tags: '',
  },
  {
    image: "https://i.ibb.co/4MHmB3t/coke-sprite.jpg",
    choose: "",
    title: 'Sprite zero ___ 330ml',
    price: '€2,50',
    tags: '',
  },
  {
    image: "https://i.ibb.co/nzqFqdx/coke-fanta.jpg",
    choose: "",
    title: 'Fanta (applesini) ___ 330ml',
    price: '€2,50',
    tags: '',
  },
  {
    image: "https://i.ibb.co/6RF3X54/coke-fanta1.jpg",
    choose: "",
    title: 'Fanta ___ 500ml',
    price: '€4,00',
    tags: '',
  },
]

export default { menu, pizzat, lisätäyttet, vegeMenu, salaatit, extrat2, drinks };
