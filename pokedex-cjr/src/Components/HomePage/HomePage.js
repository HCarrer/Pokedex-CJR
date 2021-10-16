import './HomePage.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {

    const [pokemon, setPokemons] = useState([]);

    useEffect(() => {
        axios.get("https://pokedex20201.herokuapp.com/pokemons")
        .then((resp) => {
            setPokemons(resp.data.data)
        })
    }, [])

    const allPokemonOnPage = pokemon.map(eachPokemon => {
        return <Card pokemon={eachPokemon}/>
    })

    return(
        <div>
            <div className="cards-container">
                {allPokemonOnPage}
            </div>
            <div className="page-selector">
                <BsChevronLeft className="arrow"/>
                <span className="page-number">1</span>
                <BsChevronRight className="arrow"/>
            </div>
        </div>
    );
}

export default HomePage;