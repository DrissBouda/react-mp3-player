import { useState, useEffect } from "react";
import Player from "./components/Player/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [songs] = useState([
  {
    "title": "SHADOW BOXING",
    "artist": "TIF",
    "url": "https://wss.xoom.it/divers/TIF%20-%20SHADOW%20BOXING.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/tif.jpg"
  },
  {
    "title": "Adios",
    "artist": "Klass-A",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/rap-maroc/Klass-A%20-%20Adios.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg"
  },
  {
    "title": "9SARA D LIL",
    "artist": "MA3IZ",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/rap-maroc/MA3IZ%20-%209SARA%20D%20LIL.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ma3iz.jpg"
  },
  {
    "title": "Maliach",
    "artist": "Abdeelgha4",
    "url": "http://xoom.virgilio.it/source_filemanager/ws/ss/wss/rap-maroc/Abdeelgha4%20-%20Maliach.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/abdeelgha4.jpg"
  },
  {
    "title": "Tiki Taka",
    "artist": "Pause",
    "url": "https://wss.xoom.it/rap-maroc/Pause%20-%20TIKI%20TAKA%20(feat.%20BERMUDA).mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pause.jpg"
  },
  {
    "title": "Wili",
    "artist": "Draganov",
    "url": "https://wss.xoom.it/rap-maroc/Draganov%20-%20WILI.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg"
  },
  {
    "title": "Vvs",
    "artist": "7ari",
    "url": "https://wss.xoom.it/rap-maroc/7ARI%20-%20Vvs.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/7ari.jpg"
  },
  {
    "title": "Sociopath",
    "artist": "Pause",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/rap-maroc/Pause%20-%20Sociopath.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/pause.jpg"
  },
  {
    "title": "Trou Blanc",
    "artist": "Klass-A",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/rap-maroc/Klass-A%20-%20Trou%20Blanc%20(feat.%20Nkess).mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg"
  },
  {
    "title": "Provenza",
    "artist": "KAROL G",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/divers/KAROL%20G%20-%20PROVENZA.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/karol g.jpg"
  },
  {
    "title": "My Love",
    "artist": "Faouzia",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/divers/Faouzia%20-%20HABIBI%20(MY%20LOVE).mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/faouzia.jpg"
  },
  {
    "title": "Khalini Bouhdi",
    "artist": "777YM",
    "url": "https://wss.xoom.it/rap-maroc/777YM%20-%20Khalini%20Bouhdi.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/777ym.jpg"
  },
  {
    "title": "Banality V2",
    "artist": "Diib",
    "url": "https://wss.xoom.it/rap-maroc/Diib%20-%20Banality%20V2.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/diib.jpg"
  },
  {
    "title": "Lawal (3reft Trap)",
    "artist": "Don Bigg",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/don-bigg/Don%20Bigg%20-%20Lawal%20(3reft%20Trap).mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/don bigg.jpg"
  },
  {
    "title": "Jack Sparrow",
    "artist": "Lord Mehdi",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Lord%20Mehdi%20-%20Jack%20Sparrow.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lord mehdi.jpg"
  },
  {
    "title": "N3icho La Vida",
    "artist": "Cheb Momo",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Cheb%20Momo%20-%20N3ichou%20la%20vida.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/cheb momo.jpg"
  },
  {
    "title": "Aghach",
    "artist": "LFERDA",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/LFERDA%20-%20Aghach.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lferda.jpg"
  },
  {
    "title": "Koula Nhar",
    "artist": "Lord Mehdi",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Lord%20Mehdi%20-%20Koula%20Nhar.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lord mehdi.jpg"
  },
  {
    "title": "Tant pis",
    "artist": "Lord Mehdi",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Lord%20Mehdi%20-%20Tant%20pis.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lord mehdi.jpg"
  },
  {
    "title": "Foutni W 9NI",
    "artist": "Nessyou",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Nessyou%20-%20Foutni%20w%209ni.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nessyou.jpg"
  },
  {
    "title": "DRAIL",
    "artist": "MA3iZ",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/MA3IZ%20-%20DRAILL.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ma3iz.jpg"
  },
  {
    "title": "JRO7i",
    "artist": "MA3iZ",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/MA3IZ%20-%20JRO7I.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/ma3iz.jpg"
  },
  {
    "title": "Adams Ft. Raid",
    "artist": "Lmorphine",
    "url": "https://wss.xoom.it/inkonnu/L%20morphine%20-%20Adams%2C%20Raid.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lmorphine.jpg"
  },
  {
    "title": "Sparadra",
    "artist": "Lmorphine",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/L%20morphine%20-%20Sparadra.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/lmorphine.jpg"
  },
  {
    "title": "Tab3ini V3",
    "artist": "Inkonnu",
    "url": "https://wss.xoom.it/inkonnu/Inkonnu%20-%20Tab3ini%20V3.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg"
  },
  {
    "title": "RIP LOVE",
    "artist": "Faouzia",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Faouzia%20-%20RIP%2C%20Love.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/faouzia.jpg"
  },
  {
    "title": "Breda",
    "artist": "Inkonnu",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/Inkonnu%20-%20BREDA.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg"
  },
  {
    "title": "Chill",
    "artist": "Inkonnu",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/Inkonnu%20-%20Chill.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/inkonnu.jpg"
  },
  {
    "title": "Matebkich",
    "artist": "Klass-A",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/inkonnu/Klass-A%20-%20Matebkich.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg"
  },
  {
    "title": "After Prophets Life",
    "artist": "Nostik",
    "url": "https://xoom.virgilio.it/source_filemanager/ws/ss/wss/Nostik%20-%20After%20Prophets%20Life.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg"
  },
  {
    "title": "Aladin",
    "artist": "Nostik",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/JruOYyXK/54cabd1f-ab5b-4c39-9c87-50f79f6ed34d.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/nostik.jpg"
  },
  {
    "title": "Lbaroud Ft. Inkonnu",
    "artist": "Draganov",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/kpun0qBY/a3256b56-a70d-4582-8ce7-be6201c7fb8f.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg"
  },
  {
    "title": "Comite",
    "artist": "Draganov",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/qGuRjLAY/56cef9e1-f40c-4588-9595-884f26349103.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg"
  },
  {
    "title": "Ma Cherie",
    "artist": "Naika",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/DOu6XyDx/c5154877-3454-4e57-bd5b-cfe08bd322ac.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/naika.jpg"
  },
  {
    "title": "Kssiriri",
    "artist": "Draganov",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/ApuEB2wO/c63faea2-a58e-46d5-b071-48d5432a8330.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/draganov.jpg"
  },
  {
    "title": "Table 42",
    "artist": "Klass-A",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/geuA4Qn5/41f9c549-8c8e-4fee-895a-22f937ff021f.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg"
  },
  {
    "title": "Cellule Ft. Raid",
    "artist": "Diib",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/12uvoq58/5fe82507-0478-49b2-a194-9ad23494e9fc.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/diib.jpg"
  },
  {
    "title": "Prince Nassim",
    "artist": "Hamza15-3",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/Jrux1lQe/5db26c0a-470b-404d-a782-ce92d50265d6.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/hamza15-3.jpg"
  },
  {
    "title": "Denya",
    "artist": "Klass-A",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/P8uGY1g0/794bd993-b5d6-47a4-aebc-bfca989babe8.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/klass-a.jpg"
  },
  {
    "title": "Flashback",
    "artist": "Vargas",
    "url": "https://p52.f0.n0.cdn.getcloudapp.com/items/d5uReANg/6e14fd57-bda4-48a2-abcb-9ab4fc5c962f.mp3",
    "img": "https://raw.githubusercontent.com/DrissBouda/vuejs-music-app/master/src/assets/vargas.jpg"
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Player
                  currentSongIndex={currentSongIndex}
                  setCurrentSongIndex={setCurrentSongIndex}
                  nextSongIndex={nextSongIndex}
                  songs={songs}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
