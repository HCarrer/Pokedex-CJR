import { useState } from 'react';
import './Card.css';
import CardBackSide from '../CardBackSide/CardBackSide'
import CardFrontSide from '../CardFrontSide/CardFrontSide'
import ReactCardFlip from 'react-card-flip';

const Card = ({pokemon}) => {

    const [isTurned, setIsTurned] = useState(false);  //Flag para mostrar se a carta esta virada ou nao

    return (
            <div onMouseEnter={() => setIsTurned(true)} onMouseLeave={() => setIsTurned(false)}>
                <ReactCardFlip isFlipped={isTurned} flipDirection="horizontal" flipSpeedFrontToBack="0.3" flipSpeedBackToFront="0.3">
                    <div>
                        <CardFrontSide name={pokemon.name} image_url={pokemon.image_url} kind={pokemon.kind}/>
                    </div>
                    <div>
                        <CardBackSide name={pokemon.name} weight={pokemon.weight} height={pokemon.height} id={pokemon.id} kind1={pokemon.kind.split(';')[0]} kind2={pokemon.kind.split(';')[1]}/>
                    </div>
                </ReactCardFlip>
            </div>
    );
}

export default Card;