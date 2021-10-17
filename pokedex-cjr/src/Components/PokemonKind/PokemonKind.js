import { useState } from "react";
import "./PokemonKind.css"

const PokemonKind = ({kind}) => {

    const [pokemonKindText, setPokemonKindText] = useState(false);
    let pokemonKind = <></>;

    const kindUpperCase = kind.toUpperCase();

    if(pokemonKindText) {
        pokemonKind =   <div className={`kind-hovered ${kind}`} onMouseLeave={() => setPokemonKindText(false)}>
            <span className="kind-text">{kindUpperCase}</span>
        </div>
    } else {
        pokemonKind = <div className={`kind ${kind}-icon`} onMouseEnter={() => setPokemonKindText(true)}></div>
    }

    return pokemonKind;
}

export default PokemonKind;