import { useEffect, useState } from 'react';
import './Card.css';
import CardBackSide from '../CardBackSide/CardBackSide'
import CardFrontSide from '../CardFrontSide/CardFrontSide'
import ReactCardFlip from 'react-card-flip';
import axios from 'axios';

const Card = ({pokemon}) => {

    const [isTurned, setIsTurned] = useState(true);  //Flag para mostrar se a carta esta virada ou nao

    return (
            <div className="card" onMouseEnter={() => setIsTurned(true)} onMouseLeave={() => setIsTurned(false)}>
                <ReactCardFlip isFlipped={isTurned} flipDirection="horizontal">
                    <div>
                        <CardFrontSide/>
                    </div>
                    <div>
                        <CardBackSide name={pokemon.name} weight={pokemon.weight} height={pokemon.height} id={pokemon.id} kind={pokemon.kind}/>
                    </div>
                </ReactCardFlip>
            </div>
    );
}

export default Card;