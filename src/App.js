import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState(// 20230215195417
  // https://driss.cf/stream/api/v1.php
  
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
      "src": "http://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/L%20morphine%20-%20Sparadra.mp3"
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
      "src": "http://xoom.virgilio.it/source_filemanager/ws/ss/wss/Faouzia%20-%20RIP%2C%20Love.mp3"
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
      "src": "http://drissbouda.xoom.it/mp3/Cnebce%20&%20Idrissi%20-%20Weekend.mp3"
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
      "src": "http://drissbouda.xoom.it/mp3/Bigg/Bigg%20feat%20Fnaire%20-%20Familly.mp3"
    },
    {
      "id": 99,
      "title": "Fantasy",
      "artist": "Qaayel",
      "img_src": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/qaayel.jpg",
      "src": "https://p52.f0.n0.cdn.getcloudapp.com/items/v1u2xp9Y/Qaayel%20-%20Fantasy%20%28Prod.%20COLDMIND%29.mp3"
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
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
