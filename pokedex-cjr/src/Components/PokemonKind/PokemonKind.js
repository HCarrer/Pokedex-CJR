import { useState } from "react";
import "./PokemonKind.css"

const PokemonKind = ({kind}) => {

    const [pokemonKindText, setPokemonKindText] = useState(false);
    let pokemonKind = <></>;


    if(pokemonKindText) {
        pokemonKind =   <div className={`kind-hovered ${kind}`} onMouseLeave={() => setPokemonKindText(false)}>
            <span className="kind-text">{kind}</span>
        </div>
    } else {
        pokemonKind = <div className={`kind ${kind}-icon`} onMouseEnter={() => setPokemonKindText(true)}></div>
    }

    return pokemonKind;
}

export default PokemonKind;