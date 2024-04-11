import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Ranking from "./pages/Ranking";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState('');
  const [numberOfCards, setNumberOfCards] = useState(0);
  console.log(userName, numberOfCards)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setUserName={setUserName} setNumberOfCards={setNumberOfCards} />} />
        <Route path="/game" element={<Game userName={userName} />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;