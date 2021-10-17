import './CardFrontSide.css'

const CardFrontSide = ({name, image_url, kind}) => {
    return (<div id="card-front-side">
        <div className="pokemon-icon-container">
            <img src={image_url}/>
        </div>
        <div className="name"><span>{name}</span></div>
    </div>)
}

export default CardFrontSide;