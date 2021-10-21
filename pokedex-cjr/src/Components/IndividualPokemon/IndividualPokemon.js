import './IndividualPokemon.css'
import CardFrontSide from '../CardFrontSide/CardFrontSide'
import CardBackSide from '../CardBackSide/CardBackSide'
import axios from 'axios'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const IndividualPokemon = ({name, image_url, kind1, kind2, weight, height, HP, attack, defense, id}) => {

    const {user} = useContext(UserContext)

    let isFavourite = false

    if(user) {                                                  //checa se esta logado
        for(let i=0; i<user.pokemons.length; i++) {             //percorre todos os pokemons favoritados do usuario
            if(user.pokemons[i].name === name) {                //compara se o pokemon selecionado esta entre os favoritos
                isFavourite = true                              //retorna true se estiver entre os favoritos
                break                                           //sai do loop
            }
        }
    }

    let showAddToFavourite

    if(!isFavourite) {                                                                                                          //se o pokemon nao estiver entre os favoritos
        showAddToFavourite = <button onClick={clickFavourite} className="fav-button">Adicionar aos Favoritos</button>           //renderiza o botao de adicionar
    } else {                                                                                                                    //caso esteja,
        showAddToFavourite = <button onClick={clickRemoveFavourite} className="fav-button">Remover dos Favoritos</button>       //renderiza o botao de remover
    }




    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);                //Funcao para deixar a primeira letra maiuscula
    }

    function clickFavourite() {
        if(user) {
            async function addToFavourites() {
                axios.post(`https://pokedex20201.herokuapp.com/users/${user.user.username}/starred/${name}`)
                .then((resp) => {
                    alert(capitalizeFirstLetter(name) + " foi favoritado com sucesso!")
                })
            }
            addToFavourites()
        } else {
            alert("Faca o login para poder adicionar um pokemon")
        }
    }

    function clickRemoveFavourite() {
        if(user) {
            async function removeFromFavourites() {
                axios.delete(`https://pokedex20201.herokuapp.com/users/${user.user.username}/starred/${name}`)
                .then((resp) => {
                    alert(capitalizeFirstLetter(name) + " foi removido dos seus pokemons com sucesso!")
                })
            }
            removeFromFavourites()
        } else {
            alert("Faca o login para poder remover um pokemon")
        }
    }

    return(
        <div className="individual-pokemon-display">
            <div className="individual-pokemon-cards">
                <CardFrontSide name={name} image_url={image_url} kind1={kind1} kind2={kind2} weight={weight} height={height} HP={HP} attack={attack} defense={defense}/>
                <CardBackSide name={name} weight={weight} height={height} id={id} kind1={kind1} kind2={kind2}/>
            </div>
            {showAddToFavourite}
        </div>
    )
}

export default IndividualPokemon