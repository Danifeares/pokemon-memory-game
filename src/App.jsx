import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Ranking from "./pages/Ranking";
import { useEffect, useState } from "react";
import gameSound from './assets/sounds/Chopin - Nocturne op.9 No.2.mp3'

function App() {
  const [userName, setUserName] = useState('');
  const [numberOfCards, setNumberOfCards] = useState(2);
  const [difficulty, setDifficulty] = useState('ease');
  const [userAvatar, setUserAvatar] = useState(null);

  // const sound = new Audio(gameSound);

  // useEffect(() => {
  //   sound.loop;
  //   sound.autoplay;
  //   sound.play();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setUserName={setUserName} setNumberOfCards={setNumberOfCards} setUserAvatar={setUserAvatar} setDifficulty={setDifficulty} difficulty={difficulty} />} />
          <Route path="/game" element={<Game userName={userName} numberOfCards={numberOfCards} difficulty={difficulty} userAvatar={userAvatar} />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;