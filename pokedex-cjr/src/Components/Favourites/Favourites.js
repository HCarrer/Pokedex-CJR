import { useState } from 'react';
import Card from '../Card/Card';
import './Favourites.css'
import Modal from '../../Modal/Modal';

const Favourites = ({pokemon}) => {

    const [showSpecificPokemon, setShowSpecificPokemon] = useState(false);

    return(
        <div>
            <Modal show={showSpecificPokemon} onClose={() => setShowSpecificPokemon(false)}>
                <Card pokemon={pokemon}/>
            </Modal>
        </div>
    );
}

export default Favourites;