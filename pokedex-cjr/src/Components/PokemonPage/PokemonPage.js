import './PokemonPage.css';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PageSelector from '../PageSelector/PageSelector'
import { useHistory } from "react-router-dom";


const PokemonPage = () => {

    const [pageNumber, setPageNumber] = useState(window.location.pathname.split('/')[1]);

    let history = useHistory()

    if(pageNumber === "") {
        setPageNumber(1)
    }

    const [pokemon, setPokemons] = useState([]);

    const API = "https://pokedex20201.herokuapp.com/pokemons?page=" + pageNumber

    useEffect(() => {
        axios.get(API)
        .then((resp) => {
            setPokemons(resp.data.data)
            history.push(`${pageNumber}`)
        })
    }, [API])

    const allPokemonOnPage = pokemon.map(eachPokemon => {
        return  <div>
                    <Card pokemon={eachPokemon}/>
                </div>
    })

    return(
        <div>
            <div className="cards-container">
                {allPokemonOnPage}
            </div>
            <PageSelector PageNumber={pageNumber} SetPageNumber={setPageNumber}/>
        </div>
    );
}

export default PokemonPage;