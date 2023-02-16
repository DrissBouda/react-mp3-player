import {useState, useEffect} from 'react';
import Player from './components/Player/Player';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [songs] = useState(
  [
    {
      "id": 0,
      "title": "Wili",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://wss.xoom.it/rap-maroc/Draganov%20-%20WILI.mp3"
    },
    {
      "id": 1,
      "title": "Vvs",
      "artist": "7ari",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/7ari.jpg",
      "src": "https://wss.xoom.it/rap-maroc/7ARI%20-%20Vvs.mp3"
    },
    {
      "id": 2,
      "title": "Sociopath",
      "artist": "Pause",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pause.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/rap-maroc/Pause%20-%20Sociopath.mp3"
    },
    {
      "id": 3,
      "title": "Trou Blanc",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/rap-maroc/Klass-A%20-%20Trou%20Blanc%20(feat.%20Nkess).mp3"
    },
    {
      "id": 4,
      "title": "Provenza",
      "artist": "KAROL G",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/karol g.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/divers/KAROL%20G%20-%20PROVENZA.mp3"
    },
    {
      "id": 5,
      "title": "My Love",
      "artist": "Faouzia",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/faouzia.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/divers/Faouzia%20-%20HABIBI%20(MY%20LOVE).mp3"
    },
    {
      "id": 6,
      "title": "Khalini Bouhdi",
      "artist": "777YM",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/777ym.jpg",
      "src": "https://wss.xoom.it/rap-maroc/777YM%20-%20Khalini%20Bouhdi.mp3"
    },
    {
      "id": 7,
      "title": "Banality V2",
      "artist": "Diib",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/diib.jpg",
      "src": "https://wss.xoom.it/rap-maroc/Diib%20-%20Banality%20V2.mp3"
    },
    {
      "id": 8,
      "title": "Lawal (3reft Trap)",
      "artist": "Don Bigg",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/don bigg.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/don-bigg/Don%20Bigg%20-%20Lawal%20(3reft%20Trap).mp3"
    },
    {
      "id": 9,
      "title": "Jack Sparrow",
      "artist": "Lord Mehdi",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lord mehdi.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Lord%20Mehdi%20-%20Jack%20Sparrow.mp3"
    },
    {
      "id": 10,
      "title": "N3icho La Vida",
      "artist": "Cheb Momo",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb momo.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Cheb%20Momo%20-%20N3ichou%20la%20vida.mp3"
    },
    {
      "id": 11,
      "title": "Aghach",
      "artist": "LFERDA",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lferda.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/LFERDA%20-%20Aghach.mp3"
    },
    {
      "id": 12,
      "title": "Koula Nhar",
      "artist": "Lord Mehdi",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lord mehdi.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Lord%20Mehdi%20-%20Koula%20Nhar.mp3"
    },
    {
      "id": 13,
      "title": "Tant pis",
      "artist": "Lord Mehdi",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lord mehdi.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Lord%20Mehdi%20-%20Tant%20pis.mp3"
    },
    {
      "id": 14,
      "title": "Foutni W 9NI",
      "artist": "Nessyou",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nessyou.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Nessyou%20-%20Foutni%20w%209ni.mp3"
    },
    {
      "id": 15,
      "title": "DRAIL",
      "artist": "MA3iZ",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ma3iz.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/MA3IZ%20-%20DRAILL.mp3"
    },
    {
      "id": 16,
      "title": "JRO7i",
      "artist": "MA3iZ",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ma3iz.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/MA3IZ%20-%20JRO7I.mp3"
    },
    {
      "id": 17,
      "title": "Adams Ft. Raid",
      "artist": "Lmorphine",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lmorphine.jpg",
      "src": "https://wss.xoom.it/inkonnu/L%20morphine%20-%20Adams%2C%20Raid.mp3"
    },
    {
      "id": 18,
      "title": "Sparadra",
      "artist": "Lmorphine",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lmorphine.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/L%20morphine%20-%20Sparadra.mp3"
    },
    {
      "id": 19,
      "title": "Tab3ini V3",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://wss.xoom.it/inkonnu/Inkonnu%20-%20Tab3ini%20V3.mp3"
    },
    {
      "id": 20,
      "title": "RIP LOVE",
      "artist": "Faouzia",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/faouzia.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Faouzia%20-%20RIP%2C%20Love.mp3"
    },
    {
      "id": 21,
      "title": "Breda",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/Inkonnu%20-%20BREDA.mp3"
    },
    {
      "id": 22,
      "title": "Chill",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/Inkonnu%20-%20Chill.mp3"
    },
    {
      "id": 23,
      "title": "Matebkich",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/Klass-A%20-%20Matebkich.mp3"
    },
    {
      "id": 24,
      "title": "After Prophets Life",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Nostik%20-%20After%20Prophets%20Life.mp3"
    },
    {
      "id": 25,
      "title": "Aladin",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/JruOYyXK/54cabd1f-ab5b-4c39-9c87-50f79f6ed34d.mp3"
    },
    {
      "id": 26,
      "title": "Lbaroud Ft. Inkonnu",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/kpun0qBY/a3256b56-a70d-4582-8ce7-be6201c7fb8f.mp3"
    },
    {
      "id": 27,
      "title": "Comite",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/qGuRjLAY/56cef9e1-f40c-4588-9595-884f26349103.mp3"
    },
    {
      "id": 28,
      "title": "Ma Cherie",
      "artist": "Naika",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/naika.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/DOu6XyDx/c5154877-3454-4e57-bd5b-cfe08bd322ac.mp3"
    },
    {
      "id": 29,
      "title": "Kssiriri",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/ApuEB2wO/c63faea2-a58e-46d5-b071-48d5432a8330.mp3"
    },
    {
      "id": 30,
      "title": "Table 42",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/geuA4Qn5/41f9c549-8c8e-4fee-895a-22f937ff021f.mp3"
    },
    {
      "id": 31,
      "title": "Cellule Ft. Raid",
      "artist": "Diib",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/diib.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/12uvoq58/5fe82507-0478-49b2-a194-9ad23494e9fc.mp3"
    },
    {
      "id": 32,
      "title": "Prince Nassim",
      "artist": "Hamza15-3",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/hamza15-3.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/Jrux1lQe/5db26c0a-470b-404d-a782-ce92d50265d6.mp3"
    },
    {
      "id": 33,
      "title": "Denya",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/P8uGY1g0/794bd993-b5d6-47a4-aebc-bfca989babe8.mp3"
    },
    {
      "id": 34,
      "title": "Flashback",
      "artist": "Vargas",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/vargas.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/d5uReANg/6e14fd57-bda4-48a2-abcb-9ab4fc5c962f.mp3"
    },
    {
      "id": 35,
      "title": "DNT Ft. Nouvo",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/lluojlA0/d5845ba6-ea54-4e5b-a296-f7983dae7329.flac"
    },
    {
      "id": 36,
      "title": "Youm Wara Youm",
      "artist": "Stormy",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stormy.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/mXuKdXQp/74059561-128e-48e2-b5dc-cedb8a8a72d3.mp3"
    },
    {
      "id": 37,
      "title": "Hkaya",
      "artist": "SNOR",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/snor.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/L1uBA0L0/2c576c7f-ee26-4f58-84e5-b21c65fd7486.mp3"
    },
    {
      "id": 38,
      "title": "Bonne Année",
      "artist": "Tawsen",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/tawsen.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/z8uOgdmL/68bcc597-fe88-42f3-a63b-1ee1514fbd25.mp3"
    },
    {
      "id": 39,
      "title": "Omri Ana Ft. Tagne",
      "artist": "Stormy",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stormy.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/JruDOE8X/2aff8d7b-1ed3-4fa3-a4c6-f6f7e4082ec6.mp3"
    },
    {
      "id": 40,
      "title": "Tri9 Lil Ft. Gha4",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/kpuDJZnE/c19ff085-c55b-4d8f-9889-f77f5a3e71ab.mp3"
    },
    {
      "id": 41,
      "title": "Shredder",
      "artist": "Diib",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/diib.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/rRujJ2on/16ba29e5-ae1d-4f6b-8847-a50a103ca49d.flac"
    },
    {
      "id": 42,
      "title": "N",
      "artist": "Madd",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/madd.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/wbu6j5D2/e11adcff-179e-4383-8f85-38248c234c53.mp3"
    },
    {
      "id": 43,
      "title": "Peek.A.Boo",
      "artist": "Pause",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pause.jpg",
      "src": "https://p9.f1.n0.cdn.getcloudapp.com/items/Blu4nw8E/9e9b4361-46bc-46bf-9a7f-95aaf50cbd4b.mp3"
    },
    {
      "id": 44,
      "title": "Tt Va Bien",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/4gu2odqL/77c1ba15-fa28-47c7-a5e3-ab3972b8ac73.mp3"
    },
    {
      "id": 45,
      "title": "Memo",
      "artist": "Furelise",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/furelise.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/Z4uj6xk5/2e8ff242-7cfc-48f5-b9a5-83f5cd67d3a1.mp3"
    },
    {
      "id": 46,
      "title": "Lili",
      "artist": "Plylist",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/plylist.jpg",
      "src": "https://p9.f1.n0.cdn.getcloudapp.com/items/llu5WmNq/5955d479-c49f-45b5-bfc5-737214510edd.mp3"
    },
    {
      "id": 47,
      "title": "ALOHA",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/RBuYA5QP/e27eb3e0-13e8-4931-a2eb-a1d677aa186b.mp3"
    },
    {
      "id": 48,
      "title": "Morose",
      "artist": "Damso",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/damso.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/xQubRrx5/16a5093a-fda3-4559-a3ef-ea66f0a188fc.mp3"
    },
    {
      "id": 49,
      "title": "Pegasus Ft. Raid & Diib",
      "artist": "Mehdi Black Wind",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mehdi black wind.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Mehdi%20Black%20Wind%20-%20PEGASUS%20(feat.%20Diib%20&%20Raid).mp3"
    },
    {
      "id": 50,
      "title": "Fornax A",
      "artist": "Pause",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pause.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/llu5gRzG/e6d18469-a29f-4ed6-bba7-ee11213929de.mp3"
    },
    {
      "id": 51,
      "title": "Ya Hob",
      "artist": "Hind Ziadi",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/hind ziadi.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/Blu4RXAZ/fdbae825-8c14-48f4-a7a5-9595c91d77c1.mp3"
    },
    {
      "id": 52,
      "title": "Montero",
      "artist": "Lil Nas X",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lil nas x.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/xQubxmKp/d6b8b343-77f4-45bf-bd77-5ef416a272ef.mp3"
    },
    {
      "id": 53,
      "title": "Leave The Door Open",
      "artist": "Bruno Mars",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/bruno mars.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/E0uYZBG8/d33ed6f1-1b2b-4768-9212-728893a09c3f.mp3"
    },
    {
      "id": 54,
      "title": "Love Nwantiti",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/Koud1Rez/99000e3e-e9a0-4d4b-8cf1-b4fe5b7e1d7e.mp3"
    },
    {
      "id": 55,
      "title": "Mgwani Ft. Asmae",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Inkonnu%20-%20Mgwani%20(feat.%20Asmae%20Charifi).mp3"
    },
    {
      "id": 56,
      "title": "DIFFERENT",
      "artist": "Vargas",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/vargas.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/ApuYJjvE/4a346c9e-49fd-4e6c-8a79-5fb86996c403.mp3"
    },
    {
      "id": 57,
      "title": "Apathy Ft. Raid",
      "artist": "Diib",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/diib.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/yAuDK2Jp/ab6630f6-b21d-48bf-b27f-182ac05f9ca2.mp3"
    },
    {
      "id": 58,
      "title": "BEAU-COUP",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/mXupJemB/c1ed4c9c-eea9-4828-8bfa-f02acc5d10c3.mp3"
    },
    {
      "id": 59,
      "title": "Cartable",
      "artist": "Mons",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mons.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/dr/ri/drissbouda/mp3/Mons%20-%20Cartable.mp3"
    },
    {
      "id": 60,
      "title": "T inquiete Pas",
      "artist": "MRC",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mrc.jpg",
      "src": "https://drissbouda.xoom.it/allo/MRC%20-%20T%20inquiete%20pas.mp3"
    },
    {
      "id": 61,
      "title": "Ya Lili",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/9ZuxQz2j/edea7dff-aab7-4279-8100-6af1bbd0c2b6.mp3"
    },
    {
      "id": 62,
      "title": "Spirale",
      "artist": "Raid",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/raid.jpg",
      "src": "https://drissbouda.xoom.it/allo/Raid%20-%20Spirale.mp3"
    },
    {
      "id": 63,
      "title": "Minefields",
      "artist": "Faouzia",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/faouzia.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/o0u6vY8d/22b184a4-094c-4560-9c89-4f664189e05e.mp3"
    },
    {
      "id": 64,
      "title": "B&M",
      "artist": "Small X",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/small x.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/v1ubePvN/cb06f5e7-5230-4f42-bb24-dae2a2516a57.mp3"
    },
    {
      "id": 65,
      "title": "Legendary",
      "artist": "Raid",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/raid.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/dr/ri/drissbouda/allo/Raid%20-%20Legendary.mp3"
    },
    {
      "id": 66,
      "title": "Erta Ale",
      "artist": "Raid",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/raid.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/yAuDvA12/438c29be-8ac0-476f-83a9-51a0d64bc8b8.mp3"
    },
    {
      "id": 67,
      "title": "Dragon",
      "artist": "Lmorphine",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lmorphine.jpg",
      "src": "https://drissbouda.xoom.it/allo/Lmorphine%20-%20Dragon.mp3"
    },
    {
      "id": 68,
      "title": "Santa Fe",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://drissbouda.xoom.it/mp3/ElGrandeToto%20-%20Santa%20Fe.mp3"
    },
    {
      "id": 69,
      "title": "Unstable 2",
      "artist": "Diib",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/diib.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/6qu8779N/35dbac9c-f1bc-47cf-bcf7-61aa7e5ab9bf.mp3"
    },
    {
      "id": 70,
      "title": "Ma Lune",
      "artist": "Zaho",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/zaho.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/X6ue4p4z/e8c2bfc3-c3c1-450e-a25e-8602756d0e43.mp3"
    },
    {
      "id": 71,
      "title": "Kfaya",
      "artist": "Kouz1",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kouz1.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/jkuLgnKj/53c34712-70e6-4ae9-bee7-028ac800c6d5.mp3"
    },
    {
      "id": 72,
      "title": "Walo",
      "artist": "Ghita",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ghita.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Ghita%20-%20Walo.mp3"
    },
    {
      "id": 73,
      "title": "Bent Nass",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/geubjNvm/31453640-68fc-45b6-b9b8-493e0004d1e2.mp3"
    },
    {
      "id": 74,
      "title": "ClownFish",
      "artist": "Raid",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/raid.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/v1ub5zgd/9e95c665-7742-47eb-b386-9070c61f3684.mp3"
    },
    {
      "id": 75,
      "title": "Sanami",
      "artist": "Furelise",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/furelise.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/ApuYKomv/f8754238-2ddb-4e0e-b918-47d997b16db0.mp3"
    },
    {
      "id": 76,
      "title": "Smoke Me",
      "artist": "Sasha Lopez",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/sasha lopez.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/Z4uob94v/75dc94b4-dfd7-4123-a4e7-beb6484a8ebb.mp3"
    },
    {
      "id": 77,
      "title": "Ah Bon Ft. Raste",
      "artist": "Furelise",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/furelise.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/OAugYYAr/17a410a9-301a-423c-abd2-d6d781040e35.mp3"
    },
    {
      "id": 78,
      "title": "Loozer",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/5zuAxk1l/61e586f2-1ec5-4869-96b5-a1de72b20714.mp3"
    },
    {
      "id": 79,
      "title": "Megalomania",
      "artist": "Pause",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pause.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/2NuE4odb/a036c557-167c-43ce-87f3-18b0b76fc8b3.mp3"
    },
    {
      "id": 80,
      "title": "Thezz",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/6quQqKX4/599d11ab-7a1d-41bd-8006-8078606f51da.mp3"
    },
    {
      "id": 81,
      "title": "7ali Ya 7ali",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/P8ukrkxb/a1aaa996-a92b-4964-bba1-18985b89710b.mp3"
    },
    {
      "id": 82,
      "title": "Tab3ini V1",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/9Zux09Oy/606bc71f-cb9e-4f1c-9a4c-b6ba03e6d29b.mp3"
    },
    {
      "id": 83,
      "title": "Keddaba",
      "artist": "Tawsen",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/tawsen.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/jkuepYjO/74d59e51-b286-4cfe-85f8-4259035dbaab.mp3"
    },
    {
      "id": 84,
      "title": "Ailleurs",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/12uobpE6/94772930-0237-4847-b131-e398163c1424.mp3"
    },
    {
      "id": 85,
      "title": "Khalini Saket",
      "artist": "Cheb Bilal",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb bilal.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/OAugQpP7/6f9ba6fa-6222-4769-8163-afa3fcd3410c.mp3"
    },
    {
      "id": 86,
      "title": "Bizarre",
      "artist": "Diib",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/diib.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/kpuNvrbd/ff31cee9-d154-44b4-92e7-fa4d36cde98f.mp3"
    },
    {
      "id": 87,
      "title": "Arabi Ft. Nouvo",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/6quxRwWQ/Inkonnu%20-%20Arabi.mp3"
    },
    {
      "id": 88,
      "title": "Zahri",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/RBuW2WeP/Inkonnu%20-%20ZAHRI.mp3?response-content-disposition=attachment&source=download&v=b0b3dbd1e289ac3132e583a48d420611"
    },
    {
      "id": 89,
      "title": "Chahid",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/qGuvPK9b/Inkonnu%20-%20Chahid.mp3"
    },
    {
      "id": 90,
      "title": "NASA Ft. Stormy",
      "artist": "SNOR",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/snor.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/7KuL7zXK/SNOR%20-%20NASA%20ft%20Tagne%20%20Stormy.mp3"
    },
    {
      "id": 91,
      "title": "Couvre Feu",
      "artist": "Raid",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/raid.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/yAubNk7J/RAID%20-%20COUVRE%20FEU.mp3"
    },
    {
      "id": 92,
      "title": "HES BIYA",
      "artist": "L7or",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/l7or.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/p9uGX50Y/L7OR%20-%20HES%20BIYA.mp3"
    },
    {
      "id": 93,
      "title": "Really Counts",
      "artist": "Snow Tha Product",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/snow tha product.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/Jru6Gvo2/Snow%20Tha%20Product%20-%20Really%20Counts.mp3"
    },
    {
      "id": 94,
      "title": "Ouroboros",
      "artist": "Pause",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pause.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/o0u8ZBw5/PAUSE%20-%20Ouroboros%20l%20EP.%20SOLARIS.mp3"
    },
    {
      "id": 95,
      "title": "Weekend Ft. Idrissi",
      "artist": "Cnebce",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cnebce.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Cnebce%20&%20Idrissi%20-%20Weekend.mp3"
    },
    {
      "id": 96,
      "title": "Bläulich",
      "artist": "Apache 207",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/apache 207.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/dr/ri/drissbouda/mp3/Apache%20207%20-%20Bl%C3%A4ulich.mp3"
    },
    {
      "id": 97,
      "title": "Whats Poppin",
      "artist": "Jack Harlow",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/jack harlow.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/dr/ri/drissbouda/mp3/Jack%20Harlow%20-%20Whats%20Poppin.mp3"
    },
    {
      "id": 98,
      "title": "Family Ft. Fnaire",
      "artist": "Don Bigg",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/don bigg.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Bigg/Bigg%20feat%20Fnaire%20-%20Familly.mp3"
    },
    {
      "id": 99,
      "title": "Fantasy",
      "artist": "Qaayel",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/qaayel.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/v1u2xp9Y/Qaayel%20-%20Fantasy%20%28Prod.%20COLDMIND%29.mp3"
    },
    {
      "id": 100,
      "title": "KASS Ft. Mobydick",
      "artist": "Mons",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mons.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/wbu7POez/Mons%20%C3%97%20Lmoutchou%20-%20KASS.mp3"
    },
    {
      "id": 101,
      "title": "Rockstar",
      "artist": "Post Malone",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/post malone.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/kpubw6gb/Post%20Malone%20-%20Rockstar.mp3?response-content-disposition=attachment&source=download&v=884bf024f2847d2ceffe75c574e855c5"
    },
    {
      "id": 102,
      "title": "How It All Woks Out",
      "artist": "Faouzia",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/faouzia.jpg",
      "src": "https://bouda.cf/mp3/mp3s/Faouzia%20-%20How%20It%20All%20Works%20Out.mp3"
    },
    {
      "id": 103,
      "title": "Prblms",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/012L073Z2B3v1t3f1J2a/Klass-A%20-%20Prblms.mp3"
    },
    {
      "id": 104,
      "title": "Blame",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1G0N0A343X0T2Y1K1J2r/Klass-A%20-%20BLAME.mp3"
    },
    {
      "id": 105,
      "title": "Tchernobyl",
      "artist": "Fat Mizzo",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/fat mizzo.jpg",
      "src": "https://a.tumblr.com/tumblr_mst5k5ySW31sgtovxo1.mp3?plead=please-dont-download-this-or-our-lawyers-wont-let-us-host-audio"
    },
    {
      "id": 106,
      "title": "Dunk",
      "artist": "Fat Mizzo",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/fat mizzo.jpg",
      "src": "https://a.tumblr.com/tumblr_msgvw4nPt81sgtovxo1.mp3?plead=please-dont-download-this-or-our-lawyers-wont-let-us-host-audio"
    },
    {
      "id": 107,
      "title": "The Lights",
      "artist": "Kolsch x Sasha",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kolsch x sasha.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2l1M1m240N0C2L3R3r08/K%C3%B6lsch%20x%20Sasha%20-%20The%20Lights.mp3"
    },
    {
      "id": 108,
      "title": "Al Pacino",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3y2B2s3f0a1Y1h30010k/Klass-A%20-%20Al%20Pacino%20(Prod.%20NAJI%20RAZZY).mp3"
    },
    {
      "id": 109,
      "title": "Pablo",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3t072u102h3n0I140D3E/ElGrandeToto%20Pablo%20(Prod.%20By%20Hades).mp3"
    },
    {
      "id": 110,
      "title": "Fuck Off III",
      "artist": "Raid",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/raid.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2F143R3L3N2423282U0J/Raid%20-%20Maroc.mp3"
    },
    {
      "id": 111,
      "title": "The World Returns",
      "artist": "AL031 - Innellea",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/al031 - innellea.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2Q241p022d0Z160e3q06/Innellea%20-%20The%20World%20Returns.mp3"
    },
    {
      "id": 112,
      "title": "Temperamento",
      "artist": "Sero",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/sero.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2Z070b3L2T1d030L2P3X/Sero-feat-Paula-Douglas_-_Temperamento.mp3"
    },
    {
      "id": 113,
      "title": "Maximum Frisch",
      "artist": "Veysel",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/veysel.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0420253d2r0u163n0F2J/Veysel%20-%20MAXIMUM%20FRISCH.mp3"
    },
    {
      "id": 114,
      "title": "Hilun",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2r1M3X2n2N0D1j0M2R2T/INKONNU%20-%20HILUN.mp3"
    },
    {
      "id": 115,
      "title": "Smou7at",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1v2z2o0c0W0H1H3k1s2J/TOTO%20-%20SMOUHAT.mp3"
    },
    {
      "id": 116,
      "title": "TKT",
      "artist": "KouZ1",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kouz1.jpg",
      "src": "https://bouda.cf/mp3/mp3s/KOUZ1%20-%20TKT.mp3"
    },
    {
      "id": 117,
      "title": "Ba9i",
      "artist": "Leil",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/leil.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2Z0h0t2d350v2a372C2q/Leil%20-%20Ba9i.mp3"
    },
    {
      "id": 118,
      "title": "Taste Ft. Offset",
      "artist": "Tyga",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/tyga.jpg",
      "src": "https://driss.cf/mp3/mp3s/Tyga%20-%20Taste%20Ft.%20Offset.mp3"
    },
    {
      "id": 119,
      "title": "9ra 9ra",
      "artist": "Cheb Bilal",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb bilal.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Cheb%20Bilal/bilal-9ra-9ra.mp3"
    },
    {
      "id": 120,
      "title": "Nonstop",
      "artist": "Drake",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/drake.jpg",
      "src": "https://dl.musicbazz.ir/music/khareji/Billboard/14.07.2018/Billboard%20Hot%20100%20-%2024th%20July%202018%20-%20MP3%20320/02.%20Drake%20-%20Nonstop.mp3"
    },
    {
      "id": 121,
      "title": "Sicko Mode Ft. Drake",
      "artist": "Travis Scott",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/travis scott.jpg",
      "src": "https://dl.musicbazz.ir/music/Rap/T/Travis%20Scott/Album/Travis%20Scott%20-%20Essentials%20%282019%29%20Mp3%20320kbps%20Songs%20%5BWww.MusicBazz.iR%5D/01.%20SICKO%20MODE.mp3"
    },
    {
      "id": 122,
      "title": "Butterfly Effect",
      "artist": "Travis Scott",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/travis scott.jpg",
      "src": "https://dl.musicbazz.ir/music/Rap/T/Travis%20Scott/Album/Travis%20Scott%20-%20Essentials%20%282019%29%20Mp3%20320kbps%20Songs%20%5BWww.MusicBazz.iR%5D/07.%20BUTTERFLY%20EFFECT.mp3"
    },
    {
      "id": 123,
      "title": "9awdouha Ft. Lferda",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://bouda.cf/mp3/mp3s/Toto%20-%209awdouha%20Ft.%20Lferda.mp3"
    },
    {
      "id": 124,
      "title": "Midaliya",
      "artist": "7ari",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/7ari.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3L2d1k0F3e2N3m1m050w/7ARI%20-%20Midaliya.mp3"
    },
    {
      "id": 125,
      "title": "Si Tu Savais Ft. Anys",
      "artist": "Stormy",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stormy.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1K3s3A391p2x2G27060N/Anys%20ft.%20Stormy%20-%20Si%20tu%20savais.mp3"
    },
    {
      "id": 126,
      "title": "Fratello Ft. Khtek & TAGNE",
      "artist": "Stormy",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stormy.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1836200j0v3g2M0S302s/Stormy%20-%20Fratello.mp3"
    },
    {
      "id": 127,
      "title": "Sendog Laadjab",
      "artist": "Reda Taliani",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/reda taliani.jpg",
      "src": "https://driss.cf/mp3/mp3s/Reda%20Taliani%20-%20Sendog%20Laadjab.mp3"
    },
    {
      "id": 128,
      "title": "Guantanamo",
      "artist": "Nej",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nej.jpg",
      "src": "https://drissbouda.xoom.it/allo/Nej%20-%20Guantanamo.mp3"
    },
    {
      "id": 129,
      "title": "Ca Fait Longtime",
      "artist": "Nej",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nej.jpg",
      "src": "https://drissbouda.xoom.it/allo/Nej%20-%20ca%20fait%20longtime.mp3"
    },
    {
      "id": 130,
      "title": "Singularity",
      "artist": "Stephan Bodzin",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stephan bodzin.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0N1J0M0K2a2l2g1Q3b0i/Stephan%20Bodzin%20-%20Singularity.mp3"
    },
    {
      "id": 131,
      "title": "Bougroune 2020",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/Nostik%20-%20Bougroune%202020.mp3"
    },
    {
      "id": 132,
      "title": "Yek Yek",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0W3b2l3y2z362J123T2w/DRAGANOV%20-%20YEK%20YEK.mp3"
    },
    {
      "id": 133,
      "title": "Tnaket",
      "artist": "Loun",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/loun.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3P2F2H3Q1W2H3Z210x2E/LOUN%20-%20Tnaket.mp3"
    },
    {
      "id": 134,
      "title": "Aber Egal",
      "artist": "Al Gear",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/al gear.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1k1W080z0R3v0t1g0t09/Al%20Gear%20-%20Aber%20Egal.mp3"
    },
    {
      "id": 135,
      "title": "Sun Is Up",
      "artist": "Inna",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inna.jpg",
      "src": "https://dzwonsemrish7.cloudfront.net/items/213Z1y2v1k0P2z2I1Y0b/Inna%20-%20Sun%20is%20up.mp3"
    },
    {
      "id": 136,
      "title": "777",
      "artist": "Stormy",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stormy.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3F2K3R1S0d313t3N0H2R/STORMY%20-%20777.mp3"
    },
    {
      "id": 137,
      "title": "Rrr3d",
      "artist": "Stormy",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stormy.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3u3s3z082S0W311L3m26/STORMY%20-%20RRR3D.mp3"
    },
    {
      "id": 138,
      "title": "LALALA",
      "artist": "SNOR",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/snor.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3X1V3X0L2j341P191d2k/SNOR%20-%20LALALA.mp3"
    },
    {
      "id": 139,
      "title": "Morphine",
      "artist": "Kiossi",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kiossi.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0h36401z3K2R073y1w0G/Kiossi%20-%20Morphine.mp3"
    },
    {
      "id": 140,
      "title": "Tears Of Gold",
      "artist": "Faouzia",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/faouzia.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0D0z3D0Q3d133p06322H/Faouzia%20-%20Tears%20of%20Gold.mp3"
    },
    {
      "id": 141,
      "title": "Wir",
      "artist": "Stephan Bodzin",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stephan bodzin.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/241d0O0p3B131P1J1M09/Stephan%20Bodzin%20-%20Wir.mp3"
    },
    {
      "id": 142,
      "title": "Road To Nowhere",
      "artist": "KASST",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kasst.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3F0M1Z0Q0v2i2E2E2C0b/KASST%20-%20Road%20To%20Nowhere.mp3"
    },
    {
      "id": 143,
      "title": "Bonfire",
      "artist": "Alex Stein",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/alex stein.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1J3K3c3W3e1P0W3v1R17/Alex%20Stein%20-%20Bonfire.mp3"
    },
    {
      "id": 144,
      "title": "6 Min 3likom",
      "artist": "Don Bigg",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/don bigg.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Bigg/6min%203likom.mp3"
    },
    {
      "id": 145,
      "title": "3a9lia",
      "artist": "Don Bigg",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/don bigg.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Bigg/3a9lia.mp3"
    },
    {
      "id": 146,
      "title": "Kif Ndir",
      "artist": "Zaho",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/zaho.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2y1O3X0b1q3k0R0H0N35/Zaho%20-%20Kif%20Ndir.mp3"
    },
    {
      "id": 147,
      "title": "Amazing (2008)",
      "artist": "Inna",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inna.jpg",
      "src": "https://dzwonsemrish7.cloudfront.net/items/080j1L1f111D3a3b0B1B/Inna%20-%20Amazing.mp3"
    },
    {
      "id": 148,
      "title": "Je Te Promets",
      "artist": "Zaho",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/zaho.jpg",
      "src": "https://dzwonsemrish7.cloudfront.net/items/0Z2K222U2W0P0o2M2N11/Zaho%20-%20Je%20Te%20Promets.mp3"
    },
    {
      "id": 149,
      "title": "Dima (2008)",
      "artist": "Zaho",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/zaho.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3b0v0G3m1r1E1F0o000t/Zaho%20-%20Dima.mp3"
    },
    {
      "id": 150,
      "title": "Et Moi (2008)",
      "artist": "Reda Taliani",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/reda taliani.jpg",
      "src": "https://driss.cf/mp3/mp3s/Reda%20Taliani%20-%20Et%20Moi.mp3"
    },
    {
      "id": 151,
      "title": "Nothing Can Put Me Back",
      "artist": "Loun",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/loun.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/012k0I1Z3N2D031R3u20/LOUN%20-%20Aint%20Nothing%20Can%20Put%20Me%20Back.mp3"
    },
    {
      "id": 152,
      "title": "Maybe",
      "artist": "Kettenkarussell",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kettenkarussell.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3r463s3H260t1i1F0A0M/Kettenkarussell%20-%20Maybe.mp3"
    },
    {
      "id": 153,
      "title": "Ndaber Rassi",
      "artist": "Youness",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/youness.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0v3F1e0i3T0e2t1o0K2R/Youness%20-%20Ndaber%20Rassi.mp3"
    },
    {
      "id": 154,
      "title": "Toosie Slide",
      "artist": "Drake",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/drake.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/120i2O2Q0s3r0y1e3v1N/Toosie%20Slide%20-%20Drake.mp3"
    },
    {
      "id": 155,
      "title": "De9a De9a",
      "artist": "SNOR",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/snor.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3I112c2F0D1c181B272u/SNOR%20-%20De9a%20De9a.mp3"
    },
    {
      "id": 156,
      "title": "Africain",
      "artist": "Stormy",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/stormy.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2s3b0t2Q1Z0z2y290T22/Stormy%20-%20Africain.mp3"
    },
    {
      "id": 157,
      "title": "Ana Kidali",
      "artist": "Nej",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nej.jpg",
      "src": "https://drissbouda.xoom.it/allo/Nej%20-%20Ana%20Kidali.mp3"
    },
    {
      "id": 158,
      "title": "Call Me",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/31020Q230E0Q0x3J1J2o/Klass-A%20-%20Call%20me.mp3"
    },
    {
      "id": 159,
      "title": "Barrio",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0Z3K3A2W1X3F2S1M0m2f/Klass-A%20-%20Barrio.mp3"
    },
    {
      "id": 160,
      "title": "Mocro Rabat",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0C3s260P2A091a1U0M2z/Klass-A%20-%20Mocro%20Rabat.mp3"
    },
    {
      "id": 161,
      "title": "Not Over",
      "artist": "Lord Mehdi",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lord mehdi.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3W0o3D3v1z1E2S2G391R/Lord%20Mehdi%20-%20Not%20Over.mp3"
    },
    {
      "id": 162,
      "title": "You Dont Even Know Me",
      "artist": "Faouzia",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/faouzia.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0G1E2b0C2i3D3F1c0l04/Faouzia%20-%20You%20Dont%20Even%20Know%20Me.mp3"
    },
    {
      "id": 163,
      "title": "Respect",
      "artist": "Lferda",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lferda.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/263M2b3d3H0L3e011907/Lferda%20-%20Respect.mp3"
    },
    {
      "id": 164,
      "title": "Mad About You",
      "artist": "Hooverphonic",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/hooverphonic.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2P180x0m3M0g210k2n1H/Hooverphonic%20-%20Mad%20About%20You.mp3"
    },
    {
      "id": 165,
      "title": "Over Ft. Cnebce",
      "artist": "Qaayel",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/qaayel.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2n3z1m3p2W0Q1M2C2h1W/Qaayel%20X%20Cnebce%20-%20Over%20(Audio).mp3"
    },
    {
      "id": 166,
      "title": "Halala",
      "artist": "Maestro",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/maestro.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2B13271G2n3l2J052d0W/Maestro%20-%20Halala.mp3"
    },
    {
      "id": 167,
      "title": "Beat Space Coupe",
      "artist": "Rich The Kid",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/rich the kid.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3W2W0u0c0g2W3X1k0U0G/Rich%20The%20Kid%20Type%20Beat%20Space%20Coupe.mp3"
    },
    {
      "id": 168,
      "title": "Zemer Ft. DHURATA DORA",
      "artist": "Soolking",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/soolking.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3j1j2X0j1F3F411q132M/Zem%C3%ABr.mp3"
    },
    {
      "id": 169,
      "title": "Like I Got It",
      "artist": "AK",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ak.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/232R100f1p0L1c1w1F2H/AK%20-%20Like%20I%20got%20it.mp3"
    },
    {
      "id": 170,
      "title": "Il Est La",
      "artist": "KouZ1",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kouz1.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2k1B2B3M0m0e3i3P411a/KOUZ1%20-%20IL%20EST%20LA%20(Prod.%20by%20IMHARDbeats).mp3"
    },
    {
      "id": 171,
      "title": "8PM Ft. KouZ1",
      "artist": "Maestro",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/maestro.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0D222F2R10012r3I1m1Q/MAESTRO%20-%208PM%20(Feat.%20KOUZ1).mp3"
    },
    {
      "id": 172,
      "title": "Honesty",
      "artist": "Pink Sweat",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pink sweat.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3k0x2039240R0F1J2G1E/Pink%20Sweat%20-%20Honesty.mp3"
    },
    {
      "id": 173,
      "title": "Rockstar",
      "artist": "Soolking",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/soolking.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3p2z3j0Y062j0w410M30/Soolking%20-%20Rockstar.mp3"
    },
    {
      "id": 174,
      "title": "La C",
      "artist": "Koba Lad",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/koba lad.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/393O1R3J331j171Y2r2t/Koba-LaD-La-C.mp3"
    },
    {
      "id": 175,
      "title": "Tabat Yada Abilahab",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/353Q220p2a3Y393w2s2a/Tabbat%20yada%20Abi%20Lahabin%20wa%20Tabb....mp3"
    },
    {
      "id": 176,
      "title": "ORgueilleux",
      "artist": "Koba Lad",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/koba lad.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/463C182o2O3q000R280w/Koba-LaD-ORgueilleux.mp3"
    },
    {
      "id": 177,
      "title": "LEX DFatema",
      "artist": "Mobydick",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mobydick.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0g050w440z29263t2K1U/Mobydick%20-%20LEX%20DFatema%20(Explicit).mp3"
    },
    {
      "id": 178,
      "title": "TIKKA",
      "artist": "Lartiste",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lartiste.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2G3h1c3J0K043e3y1R02/Lartiste-TIKKA-Feat.-Heuss-Lenfoir%C3%A9.mp3"
    },
    {
      "id": 179,
      "title": "170 Kg",
      "artist": "Don Bigg",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/don bigg.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/352E3v3g1n2J461Q2i1j/DON%20BIGG%20-%20170%20KG.mp3"
    },
    {
      "id": 180,
      "title": "Train De Vie",
      "artist": "Koba Lad",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/koba lad.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1Y3m1n2i3e0E2k0Y2q26/Koba%20Lad%20-%20Train%20De%20Vie.mp3"
    },
    {
      "id": 181,
      "title": "In My Head",
      "artist": "Peter Manos",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/peter manos.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0q3I0Y1A2O3K370T1U0a/Peter%20Manos%20-%20In%20My%20Head.mp3"
    },
    {
      "id": 182,
      "title": "Jaloux",
      "artist": "Dadju",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/dadju.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2i0b411V362P461I0t2F/Dadju%20-%20Jaloux.mp3"
    },
    {
      "id": 183,
      "title": "El Raton",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0f3U3Y2z1t3O0Q1T1k0S/Klass-A%20-%20El%20Raton.mp3"
    },
    {
      "id": 184,
      "title": "Sangria",
      "artist": "SAARA",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/saara.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1U0L3V1f1A1s0V2W410s/SAARA%20-%20Sangria.mp3"
    },
    {
      "id": 185,
      "title": "Without Me",
      "artist": "Halsey",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/halsey.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2u1s1J1y2R251z1P3j0Y/Without%20Me.mp3"
    },
    {
      "id": 186,
      "title": "Dior 2001",
      "artist": "RIN",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/rin.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2B0u3b0Y3r2C2W2M3X3i/RIN%20-%20Dior%202001.mp3"
    },
    {
      "id": 187,
      "title": "W.L.G",
      "artist": "Niska",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/niska.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1T443E2q453u3g3o1P3l/Niska%20-%20W.L.G.mp3"
    },
    {
      "id": 188,
      "title": "Da",
      "artist": "Mons",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mons.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/173t3Q0D3q0f1Q182h3c/MONS%20-%20DA.mp3"
    },
    {
      "id": 189,
      "title": "Natural",
      "artist": "Imagine Dragons",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/imagine dragons.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/430L422t0h3k101w0Z2R/Imagine%20Dragons%20-%20Natural.mp3"
    },
    {
      "id": 190,
      "title": "Wow Wow",
      "artist": "Mons",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mons.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3s2d3v2U0Y1H3b3A2g2Z/MONS%20-%20Wow%20Wow.mp3"
    },
    {
      "id": 191,
      "title": "No Tears Left To Cry",
      "artist": "Ariana Grande",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ariana grande.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2D3d3c2B3U2t321P1V0M/Ariana%20Grande%20-%20No%20Tears%20Left%20To%20Cry.mp3"
    },
    {
      "id": 192,
      "title": "Hbibi Mokhtalef",
      "artist": "Yousra Saouf",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/yousra saouf.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0k0q2B2B0r3f1r0x3X1S/Yousra%20Saouf%20-%20Hbibi%20Mokhtalef.mp3"
    },
    {
      "id": 193,
      "title": "Born To Be Yours",
      "artist": "Kygo & Imagine Dragons",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kygo & imagine dragons.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2w190i3x2v3G3W1d2p0Z/Born%20to%20Be%20Yours.mp3"
    },
    {
      "id": 194,
      "title": "God Is A Woman",
      "artist": "Ariana Grande",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ariana grande.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3d3o3m3O1I3R3f3R0017/God%20is%20a%20woman.mp3"
    },
    {
      "id": 195,
      "title": "Khayb Ft. SIMO",
      "artist": "Klass-A",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2q1d3o3p0f3e2h281j0c/Klass-A%20-%20Khayb%20(feat.%20S.I.M.O).mp3"
    },
    {
      "id": 196,
      "title": "Mwaka Moon Ft. Damso",
      "artist": "Kalash",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/kalash.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2z32380z393u111h3D0e/04-kalash-mwaka_moon_feat_damso.mp3"
    },
    {
      "id": 197,
      "title": "Yawili Ah",
      "artist": "Mehdi Mozayine",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mehdi mozayine.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1J1p192o3O0Z3t1W0D0p/Mehdi%20Mozayine%20-%20Yawili%20Ah.mp3"
    },
    {
      "id": 198,
      "title": "Choukran",
      "artist": "7ari",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/7ari.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2N2w3j1b2E3o2437423Z/7ARI%20-%20CHOUKRAN.mp3"
    },
    {
      "id": 199,
      "title": "Go Away",
      "artist": "AK",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ak.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3T1L2t1C3M322D0F421g/AK%20-%20Go%20Away.mp3"
    },
    {
      "id": 200,
      "title": "In My Feelings",
      "artist": "Drake",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/drake.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/3J0L2U0Q2v0733342K15/Drake_-_In_My_Feelings.mp3"
    },
    {
      "id": 201,
      "title": "Tab3ini V2",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/p9ubr2Jm/3471b5cd-d0c6-4b96-bfb2-07829de9a2cb.mp3"
    },
    {
      "id": 202,
      "title": "Hope You Do",
      "artist": "Chris Brown",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/chris brown.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0v3m2g2K2T2s3c0d050j/Hope%20You%20Do%20-%20Cris%20Brown.mp3"
    },
    {
      "id": 203,
      "title": "Mohamed",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/nostik%20-%20mohamed.mp3"
    },
    {
      "id": 204,
      "title": "Issa",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/kafer%20maghribi%20-%203issa.mp3"
    },
    {
      "id": 205,
      "title": "Solayman",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/kafer%20maghribi%20-%20solaymane.mp3"
    },
    {
      "id": 206,
      "title": "Moussa",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/kafer%20maghribi%20-%20moussa.mp3"
    },
    {
      "id": 207,
      "title": "Youssef",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/kafer%20maghribi%20-%20youssef.mp3"
    },
    {
      "id": 208,
      "title": "Ibrahim and Lout",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/kafer%20maghribi%20-%20ibrahim%20and%20loot.mp3"
    },
    {
      "id": 209,
      "title": "Nou7",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/kafer%20maghribi%20-%20nouh.mp3"
    },
    {
      "id": 210,
      "title": "Adam",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/kafer%20maghribi%20-%20adam.mp3"
    },
    {
      "id": 211,
      "title": "Changes",
      "artist": "XXXTentacion",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/xxxtentacion.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2G3W3F06021Y1P0t2S0b/XXXTentacion%20-%20Changes.mp3"
    },
    {
      "id": 212,
      "title": "Lucid Dreams",
      "artist": "Juice Wrld ",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/juice wrld .jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2J321b1p0A0h1Y0o3A3r/Juice%20Wrld%20Lucid%20Dreams.mp3"
    },
    {
      "id": 213,
      "title": "7ala9a Ft. Toto",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/271a2q3n2D2O2L1y0j3C/Mr%20Draganov%20Ft%20Toto%202018%20-%207ala9a.MP3"
    },
    {
      "id": 214,
      "title": "Selfish",
      "artist": "AK",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ak.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2q2j2B0i3q0g3i30132H/AK%20-%20SELFISH.mp3"
    },
    {
      "id": 215,
      "title": "Save Me",
      "artist": "XXXTentacion",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/xxxtentacion.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2M0a0b2u39031t3H0o46/XXXTENTACION%20-%20Save%20Me.mp3"
    },
    {
      "id": 216,
      "title": "Bghawni Saket",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/dr/ri/drissbouda/Draganov%20-%20BGHAWNI%20SAKET.mp3"
    },
    {
      "id": 217,
      "title": "A L'ammoniaque",
      "artist": "PNL",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pnl.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/000r0N2J233v1D3O1c1r/Pnl%20A%20l%20ammoniaque.mp3"
    },
    {
      "id": 218,
      "title": "Jocelyn Flores",
      "artist": "XXXTentacion",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/xxxtentacion.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1X130R2g222g3m1D1h3U/XXtentacion-Jocelyn%20Flores.mp3"
    },
    {
      "id": 219,
      "title": "Hadaday",
      "artist": "Lferda",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lferda.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/272d0L0a3a2I172m0N1P/LFERDA%20-%20HADADAY.mp3"
    },
    {
      "id": 220,
      "title": "Bill Gates",
      "artist": "FELLG",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/fellg.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/221d2R3j1h1q0Z1c3b3d/FELLG%20-%20BILL%20GATES.mp3"
    },
    {
      "id": 221,
      "title": "Alone (Beat)",
      "artist": "Post Malone",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/post malone.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/2G0o293X3n2B452y1r09/FREE%20Post%20Malone%20Type%20Beat%20-%20ALONE.mp3"
    },
    {
      "id": 222,
      "title": "Sad",
      "artist": "XXXTentacion",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/xxxtentacion.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0h051P2a0T2i2l1Q1m0t/Xxxtentacion%20sad.mp3"
    },
    {
      "id": 223,
      "title": "Look At Me",
      "artist": "XXXTentacion",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/xxxtentacion.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/111r0E200h2K260c3K3r/look%20at%20me%20-%20xxx.mp3"
    },
    {
      "id": 224,
      "title": "Aouelt Nrouh",
      "artist": "Cheb Bilal",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb bilal.jpg",
      "src": "https://p9.f1.n0.cdn.getcloudapp.com/items/E0uYZG0y/e736e610-9c49-4a6a-8632-dad5740131fa.mp3"
    },
    {
      "id": 225,
      "title": "Better Now",
      "artist": "Post Malone",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/post malone.jpg",
      "src": "https://f.v1.n0.cdn.getcloudapp.com/items/1v0i130E1T2E1T2d0L3Z/post-malone-better-now.mp3"
    },
    {
      "id": 226,
      "title": "Smog",
      "artist": "Damso",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/damso.jpg",
      "src": "https://drissbouda.xoom.it/damso-smog.mp3"
    },
    {
      "id": 227,
      "title": "Bavra ft. Toto",
      "artist": "Issam",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/issam.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/E0uYQgRz/8390f24c-3162-43d7-b31f-076340a86c42.mp3"
    },
    {
      "id": 228,
      "title": "Congratulations",
      "artist": "Post Malone",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/post malone.jpg",
      "src": "https://f.v1.n0.cdn.getcloudapp.com/items/0p0I3G0m1X0F1H2Q412X/Post%20Malone%20-%20Congratulations%20ft.%20Quavo.mp3"
    },
    {
      "id": 229,
      "title": "Bandz",
      "artist": "XCEP",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/xcep.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1y1t2W0F2i0Y470o351t/XCEP%20-%20BANDZ%20(Official%20Music%20Video)%20-%20YouTube.mp3"
    },
    {
      "id": 230,
      "title": "Akhi",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0v3E1t462v3b190v403a/Inkonnu%20-%20Akhi.mp3"
    },
    {
      "id": 231,
      "title": "Fuck Off II",
      "artist": "Raid",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/raid.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/070W262L3e2F2t0v0E2b/Raid%20-%20%D9%83%D9%81%D8%A7%D8%AD%D9%8A%20%20Fuck%20Off%20II.mp3"
    },
    {
      "id": 232,
      "title": "STYLO",
      "artist": "Madd",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/madd.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/bi/il/bilalizik/MADD%20-%20STYLO.mp3"
    },
    {
      "id": 233,
      "title": "Piano",
      "artist": "Mons",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mons.jpg",
      "src": "https://drissbouda.xoom.it/Mons%20-%20PIANO..mp3"
    },
    {
      "id": 234,
      "title": "Bros",
      "artist": "RIN",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/rin.jpg",
      "src": "https://drissbouda.xoom.it/RIN%20-%20Bros%20(prod.%20Minhtendo).mp3"
    },
    {
      "id": 235,
      "title": "EY EY EY",
      "artist": "Madd",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/madd.jpg",
      "src": "https://drissbouda.xoom.it/MADD%20-%20EY%20EY%20EY.mp3"
    },
    {
      "id": 236,
      "title": "Loubna",
      "artist": "Cheb Rayan",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb rayan.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/dr/ri/drissbouda/mp3/Cheb%20Rayan%20-%20Loubna%202014.mp3"
    },
    {
      "id": 237,
      "title": "Baghin Ft Bad Flow",
      "artist": "Lbenj",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lbenj.jpg",
      "src": "https://a.tumblr.com/tumblr_pacj1trwi81sgtovxo1.mp3"
    },
    {
      "id": 238,
      "title": "Wa9ti Ghali",
      "artist": "Inkonnu",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg",
      "src": "https://a.tumblr.com/tumblr_pacbqnzowB1sgtovxo1.mp3"
    },
    {
      "id": 239,
      "title": "Love",
      "artist": "Draganov",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg",
      "src": "https://a.tumblr.com/tumblr_pacb81iZ411sgtovxo1.mp3"
    },
    {
      "id": 240,
      "title": "Halloween",
      "artist": "Lferda",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lferda.jpg",
      "src": "https://a.tumblr.com/tumblr_pacazpzmcy1sgtovxo1.mp3"
    },
    {
      "id": 241,
      "title": "Khaloni Nabki",
      "artist": "Abdelmoula",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/abdelmoula.jpg",
      "src": "https://drissbouda.xoom.it/mp3/01.Abdelmoula%202012%20-%20Khaloni%20Nebki.mp3"
    },
    {
      "id": 242,
      "title": "Nharzin Ft. ALA",
      "artist": "ElGrandeToto",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/elgrandetoto.jpg",
      "src": "https://drissbouda.xoom.it/allo/01%20A.L.A%20-%20Nharzin%20(feat.%20Toto).mp3"
    },
    {
      "id": 243,
      "title": "Mira Ft. Toto",
      "artist": "Anas",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/anas.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/7KuPqO00/e443403f-1b1a-4e27-840a-ce2259ead63d.mp3"
    },
    {
      "id": 244,
      "title": "Za3ma Twalilek",
      "artist": "Cheb Bilal",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb bilal.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/p9ubBv7K/00a60e0c-9518-4357-9c80-d58a8b67b763.mp3"
    },
    {
      "id": 245,
      "title": "Al Rissala",
      "artist": "Muslim",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/muslim.jpg",
      "src": "https://k007.kiwi6.com/hotlink/fkzfwhp7cc/Muslim_-_AL_RISSALA_2014_.mp3"
    },
    {
      "id": 246,
      "title": "Derniere Danse",
      "artist": "Indila",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/indila.jpg",
      "src": "https://k007.kiwi6.com/hotlink/f13tk0yyn9/Indila_-_Derniere_Danse.mp3"
    },
    {
      "id": 247,
      "title": "Boom 2012",
      "artist": "Mr Danger",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mr danger.jpg",
      "src": "https://k007.kiwi6.com/hotlink/joo6vczpne/Mr_Danger_-_Boom_2012.mp3"
    },
    {
      "id": 248,
      "title": "Lmarhoum",
      "artist": "Muslim",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/muslim.jpg",
      "src": "https://f.v1.n0.cdn.getcloudapp.com/items/2z1O012o2g3P441N3T2m/Muslim%20-%20Lmarhoum.mp3"
    },
    {
      "id": 249,
      "title": "7libou Fad",
      "artist": "Spoo Pow",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/spoo pow.jpg",
      "src": "https://f.v1.n0.cdn.getcloudapp.com/items/2h1M0r0T3N3K383I0p0E/Spoo%20Pow%20-%207libou%20Fad.mp3.mp3"
    },
    {
      "id": 250,
      "title": "Yane Sine Krad",
      "artist": "Mobydick",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/mobydick.jpg",
      "src": "https://f.v1.n0.cdn.getcloudapp.com/items/0O3b1u171f0u2u1a2g2u/Mobydick%20-%20Yan%20Sine%20Krad.mp3"
    },
    {
      "id": 251,
      "title": "Bladi Bled",
      "artist": "Don Bigg",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/don bigg.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/dr/ri/drissbouda/mp3/Bigg/Bladi%20Bled.mp3"
    },
    {
      "id": 252,
      "title": "Red Bone",
      "artist": "Two Tone",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/two tone.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0M3x2e2m0x390F1L0b1d/Two%20Tone%20-%20Red%20Bone.mp3"
    },
    {
      "id": 253,
      "title": "Son De Amores",
      "artist": "Andy & Lucas",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/andy & lucas.jpg",
      "src": "https://xoom.virgilio.it/source_filemanager/dr/ri/drissbouda/mp3/son%20de%20amores.mp3"
    },
    {
      "id": 254,
      "title": "A Year Without Rain",
      "artist": "Selena Gomez",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/selena gomez.jpg",
      "src": "https://f.v1.n0.cdn.getcloudapp.com/items/2y0n3i0e470O03350L2X/02%20A%20Year%20Without%20Rain.mp3"
    },
    {
      "id": 255,
      "title": "We Like To Party",
      "artist": "Inna",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inna.jpg",
      "src": "https://dzwonsemrish7.cloudfront.net/items/1c1P1q1a0C2Z3M1g1b3T/Inna%20-%20We%20Like%20To%20Party.mp3"
    },
    {
      "id": 256,
      "title": "Saha Ila Mchat",
      "artist": "Cheb Bilal",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb bilal.jpg",
      "src": "https://p9.f1.n0.cdn.getcloudapp.com/items/6qu8Gm4Q/1d8a4aca-f74d-4705-8701-d56d6326f0d9.mp3"
    },
    {
      "id": 257,
      "title": "When I Was Your Man",
      "artist": "Boyce Avenue",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/boyce avenue.jpg",
      "src": "https://p9.f1.n0.cdn.getcloudapp.com/items/geubyj84/9950f297-7fb3-4dc4-8edb-874139a7d745.mp3"
    },
    {
      "id": 258,
      "title": "Tza3za3 Khatri",
      "artist": "Cheb Mami",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb mami.jpg",
      "src": "https://p9.f1.n0.cdn.getcloudapp.com/items/NQuw0kpx/ac015c68-968a-4dc2-a8c8-bb74c0571834.mp3"
    },
    {
      "id": 259,
      "title": "Rabiosa",
      "artist": "Shakira",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/shakira.jpg",
      "src": "https://billigradio.com/zzold/_notes/GOLD%20-%2002/SHAKIRA%20-%20Rabiosa.mp3"
    },
    {
      "id": 260,
      "title": "Mohima Rassmia",
      "artist": "Houda Saad",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/houda saad.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/0a0l2b0x0k3k2g1J3f3y/Houda%20Saad%20-%20Mohima%20Rasmiya.mp3"
    },
    {
      "id": 261,
      "title": "Ahl Al Kahf",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/kafer%20maghribi%20ahl%20alkahf.mp3"
    },
    {
      "id": 262,
      "title": "Fhamtini Oula La",
      "artist": "Don Bigg",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/don bigg.jpg",
      "src": "https://k003.kiwi6.com/hotlink/hd186iwxvx/bigg_-_fhamtini_oula_la.mp3"
    },
    {
      "id": 263,
      "title": "Rani Mara Hna",
      "artist": "Cheb Hasni",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb hasni.jpg",
      "src": "https://a.tumblr.com/tumblr_mstkeclZLS1sgtovxo1.mp3"
    },
    {
      "id": 264,
      "title": "A7dath Nihaya",
      "artist": "Nostik",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg",
      "src": "https://drissbouda.xoom.it/ahdath%20nihaya%20kafer%20maghribi.mp3"
    },
    {
      "id": 265,
      "title": "Desole",
      "artist": "Sexion D Assaut",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/sexion d assaut.jpg",
      "src": "https://drissbouda.xoom.it/mp3/Desole.mp3"
    },
    {
      "id": 266,
      "title": "Atr Al Hayah",
      "artist": "Ahmed Mekky",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ahmed mekky.jpg",
      "src": "https://d1sz9tkli0lfjq.cloudfront.net/items/1v1n0u2M1s1L3U0D2j2G/Ahmed%20Mekky%20-%20Atr%20AL%20Hayah.mp3"
    },
    {
      "id": 267,
      "title": "Ma Nansakch",
      "artist": "Cheb Bilal",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb bilal.jpg",
      "src": "https://drissbouda.xoom.it/Cheb%20Bilal%20-%20Ma%20Nansakch.mp3"
    },
    {
      "id": 268,
      "title": "Ihsass",
      "artist": "Carole Samaha",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/carole samaha.jpg",
      "src": "https://k005.kiwi6.com/hotlink/eblg20ogch/Carole_samaha_-_01._ehssas.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Player currentSongIndex={currentSongIndex} 
            setCurrentSongIndex={setCurrentSongIndex} 
            nextSongIndex={nextSongIndex} 
            songs={songs} 
          />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
