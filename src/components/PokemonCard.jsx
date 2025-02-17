import React, { useContext } from "react";
import { NameContext, TypeContext } from "../context/TypeContext";

function PokemonCard() {
  const { selectedType } = useContext(TypeContext);
  const { name } = useContext(NameContext);

  const imageSrc = `/cards/${selectedType}-card.webp`;

  return (
    <div className="container">
      <div className="card w-1/2 mx-auto my-20 relative">
        <div className="pokemon-name absolute left-32 top-4 font-bold text-xl">
          <p>{name}</p>
        </div>
        <div className="pokemon-name absolute left-64 top-3 font-bold text-xl">
          <p>12</p>
        </div>
        <img className="w-full" src={imageSrc} alt={selectedType} />
      </div>
    </div>
  );
}

export default PokemonCard;
