import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Ranking from "./pages/Ranking";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState('');
  const [numberOfCards, setNumberOfCards] = useState(15);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setUserName={setUserName} setNumberOfCards={setNumberOfCards} />} />
        <Route path="/game" element={<Game userName={userName} numberOfCards={numberOfCards} />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;