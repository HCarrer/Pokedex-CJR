import './PokemonPage.css';
import Card from '../Card/Card';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PageSelector from '../PageSelector/PageSelector'
import PageContext from '../Context/PageContext';


const PokemonPage = () => {

    const {pageNumber, setPageNumber} = useContext(PageContext)

    const [pokemon, setPokemons] = useState([]);

    const API = "https://pokedex20201.herokuapp.com/pokemons?page=" + pageNumber

    useEffect(() => {
        axios.get(API)
        .then((resp) => {
            setPokemons(resp.data.data)
        })
    }, [API, pageNumber])

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