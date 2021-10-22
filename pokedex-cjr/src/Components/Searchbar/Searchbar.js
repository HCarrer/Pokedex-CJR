import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import './Searchbar.css'
import axios from 'axios'
import IndividualPokemon from "../IndividualPokemon/IndividualPokemon"
import Modal from "../../Modal/Modal"


const Search = () => {
    const [searchPoke, setSearchPoke] = useState('');

    const [foundPoke, setFoundPoke] = useState([])

    const [showIndividuaPokemon, setshowIndividuaPokemon] = useState(false)

    let PokeApi = "https://pokeapi.co/api/v2/pokemon/" + searchPoke;        //nova API
    const [primaryKindFixed, setPrimaryKindFixed] = useState(false);            //tipo primario consertado
    const [secundaryKindFixed, setSecundaryKindFixed] = useState(false);        //tipo secundario consertado
    const [HP, setHP] = useState("");
    const [attack, setAttack] = useState("");
    const [defense, setDefense] = useState("");

    let hasError;

    let showResult = <></>


    function handleSearch(event) {
        event.preventDefault()
        axios.get("https://pokedex20201.herokuapp.com/pokemons/" + searchPoke)
        .then((resp) => {
            if(resp.data != null) {
                setFoundPoke(resp.data)
                setshowIndividuaPokemon(true)
                hasError = false
            } else {
                hasError = true
                alert(`Nenhum pokemon com o nome ${searchPoke} foi encontrado. Tente novamente!`)
            }
        })
        if(!hasError) {
            axios.get(PokeApi)
            .then((resp) => {
                setPrimaryKindFixed(null)                                           //setta os dois tipos como null para corrigir bug
                setSecundaryKindFixed(null)                                         //que carregava o segundo tipo para a pagina seguinte
    
    
                setPrimaryKindFixed(resp.data.types[0].type.name);                  //setta o tipo primario de acordo com a API correta
                if(resp.data.types.length === 2) {                                  //checa se existe um segundo tipo
                    setSecundaryKindFixed(resp.data.types[1].type.name);            //caso exista um segundo tipo, setta o tipo secundario de acordo com a API correta
                }
                setHP(resp.data.stats[0].base_stat);
                setAttack(resp.data.stats[1].base_stat);
                setDefense(resp.data.stats[2].base_stat);
            }) 
        }
    }

    if(!hasError) {
        showResult =    <Modal show={showIndividuaPokemon} onClose={() => setshowIndividuaPokemon(false)}>
                            <IndividualPokemon name={foundPoke.name} id={foundPoke.id} image_url={foundPoke.image_url} kind1={primaryKindFixed} kind2={secundaryKindFixed} weight={foundPoke.weight} height={foundPoke.height} HP={HP} attack={attack} defense={defense}/>
                        </Modal>
    }

    return (
        <form onSubmit={handleSearch}>
            <div className="searchBox">
                <input className="searchInput" type="text" name="" placeholder="Procure um pokemon..." onChange={(event) => {setSearchPoke(event.target.value)}}/>
                <button className="searchButton">
                    <FaSearch/>
                </button>
                {showResult}
            </div>
        </form>

    )
}

export default Search