import { useState } from 'react';
import './Card.css';

const Card = () => {

    const [isTurned, setIsTurned] = useState(false);

    if(isTurned) {
        return (
            <div className="card-mockup turned" onMouseLeave={() => setIsTurned(false)}></div>
        );
    }
    else {
        return (
            <div className="card-mockup" onMouseEnter={() => setIsTurned(true)}></div>
        );
    }
}

export default Card;