import { useState } from "react";

import "./App.css";

import Header from "./components/Header/index.jsx";
import GameField from "./components/GameField/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <GameField />
    </>
  );
}

export default App;
