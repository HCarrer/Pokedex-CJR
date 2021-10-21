import UserContext from '../Context/UserContext'
import { useContext, useEffect, useState } from 'react'
import './UserPage.css'
import Card from '../Card/Card'
import axios from 'axios'

const UserPage = () => {

    const {user} = useContext(UserContext)

    const [pokemon, setPokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokedex20201.herokuapp.com/users/${user.user.username}`)
        .then((resp) => {
            setPokemons(resp.data.pokemons)
        })
    }, [user.user.username])

    const favPokemons = pokemon.map(eachPokemon => {
        return <Card pokemon={eachPokemon}/>
    })

    return(
        <div>
            <div className="fav-cards-title-container">
                <span className="fav-cards-title-text">Meus Pokemons:</span>
            </div>
            <div className="fav-cards-container">
                {favPokemons}
            </div>
        </div>
    )
}

export default UserPage