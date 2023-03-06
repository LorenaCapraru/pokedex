import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon favAbility={abilities} />
      <CaughtPokemon dateTime={date} name="Lorena" />
    </div>
  );
}

const divRoot = document.querySelector("#root");
ReactDOM.render(<App />, divRoot);

export default App;

