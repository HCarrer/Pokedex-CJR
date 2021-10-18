import './CardFrontSide.css'

const CardFrontSide = ({name, image_url, kind}) => {
    return (
        <div id="card-front-side" className={`${kind}-texture darken`}>
            <div className="pokemon-icon-container">
                <img alt="" src={image_url}/>
            </div>
            <div className="name">
                <span>{name}</span>
            </div>
        </div>)
}

export default CardFrontSide;