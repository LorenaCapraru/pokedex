import React from "react";
function BestPokemon(props) {
  //let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favourite Polemon is Squirtle</p>
      <ul>
        {props.favAbility.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;
