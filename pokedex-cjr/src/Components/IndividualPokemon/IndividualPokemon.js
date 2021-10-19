import './IndividualPokemon.css'
import CardFrontSide from '../CardFrontSide/CardFrontSide'
import CardBackSide from '../CardBackSide/CardBackSide'

const IndividualPokemon = ({name, image_url, kind1, kind2, weight, height, HP, attack, defense, id}) => {
    return(
        <div className="individual-pokemon-display">
            <div className="individual-pokemon-cards">
                <CardFrontSide name={name} image_url={image_url} kind1={kind1} kind2={kind2} weight={weight} height={height} HP={HP} attack={attack} defense={defense}/>
                <CardBackSide name={name} weight={weight} height={height} id={id} kind1={kind1} kind2={kind2}/>
            </div>
            <button className="fav-button">Adicionar aos Favoritos</button>
        </div>
    )
}

export default IndividualPokemon