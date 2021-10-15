import { useState } from 'react';
import './Card.css';
import CardBackSide from '../CardBackSide/CardBackSide'
import CardFrontSide from '../CardFrontSide/CardFrontSide'
import ReactCardFlip from 'react-card-flip';
import { GrRotateLeft } from "react-icons/gr"
import RotationIcon from './rotation-icon.png'

const Card = () => {

    const [isTurned, setIsTurned] = useState(false);

    return (
            <div className="card" onMouseEnter={() => setIsTurned(true)} onMouseLeave={() => setIsTurned(false)}>
                <ReactCardFlip isFlipped={isTurned} flipDirection="horizontal">
                    <div>
                        <CardFrontSide/>
                    </div>
                    <div>
                        <CardBackSide/>
                    </div>
                </ReactCardFlip>
            </div>
    );
}

export default Card;