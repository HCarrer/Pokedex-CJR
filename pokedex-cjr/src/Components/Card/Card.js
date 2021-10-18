import { useState, useEffect } from 'react';
import './Card.css';
import CardBackSide from '../CardBackSide/CardBackSide'
import CardFrontSide from '../CardFrontSide/CardFrontSide'
import ReactCardFlip from 'react-card-flip';
import axios from 'axios'

const Card = ({pokemon}) => {

    const PokeApi = "https://pokeapi.co/api/v2/pokemon/" + pokemon.name;        //nova API

    const [primaryKindFixed, setPrimaryKindFixed] = useState(false);            //tipo primario consertado
    const [secundaryKindFixed, setSecundaryKindFixed] = useState(false);        //tipo secundario consertado

    useEffect(() => {
        axios.get(PokeApi)
        .then((resp) => {
            setPrimaryKindFixed(resp.data.types[0].type.name);                  //setta o tipo primario de acordo com a API correta
            if(resp.data.types.length === 2) {                                   //checa se existe um segundo tipo
                setSecundaryKindFixed(resp.data.types[1].type.name);            //caso exista um segundo tipo, setta o tipo secundario de acordo com a API correta
            }
        })
    }, [pokemon.name, PokeApi])




    const [isTurned, setIsTurned] = useState(false);  //Flag para mostrar se a carta esta virada ou nao

    return (
            <div onMouseEnter={() => setIsTurned(true)} onMouseLeave={() => setIsTurned(false)}>
                <ReactCardFlip isFlipped={isTurned} flipDirection="horizontal" flipSpeedFrontToBack="0.3" flipSpeedBackToFront="0.3">
                    <div>
                        <CardFrontSide name={pokemon.name} image_url={pokemon.image_url} kind={primaryKindFixed}/>
                    </div>
                    <div>
                        <CardBackSide name={pokemon.name} weight={pokemon.weight} height={pokemon.height} id={pokemon.id} kind1={primaryKindFixed} kind2={secundaryKindFixed}/>
                    </div>
                </ReactCardFlip>
            </div>
    );
}

export default Card;