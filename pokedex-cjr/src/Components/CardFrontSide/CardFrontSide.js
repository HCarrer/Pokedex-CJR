import './CardFrontSide.css'

const CardFrontSide = ({name, image_url, kind1, kind2, weight, height, HP, attack, defense}) => {

    let kindsBriefText =    <div className="kinds-brief-container">
                                <span className="kinds-brief-text">{kind1}</span>
                                <span className="kinds-brief-text">Peso:{weight / 10}
                                    <span className="kinds-biref-text">kg</span>
                                </span>
                                <span className="kinds-brief-text">Altura:{height / 10}
                                    <span className="kinds-biref-text">m</span>
                                </span>
                            </div>


    if(kind2) {
        kindsBriefText =    <div className="kinds-brief-container">
                                <span className="kinds-brief-text">{kind1}</span>
                                <span className="kinds-brief-text">{kind2}</span>
                                <span className="kinds-brief-text">Peso:{weight / 10}
                                    <span className="kinds-biref-text">kg</span>
                                </span>
                                <span className="kinds-brief-text">Altura:{height / 10}
                                    <span className="kinds-biref-text">m</span>
                                </span>
                            </div>
        
    }

    let KindsIcons =    <div className="kind-icons-container">
                            <div className={`kind-icon ${kind1}-icon-small`}></div>
                        </div>
    if(kind2) {
        KindsIcons =    <div className="kind-icons-container">
                            <div className={`kind-icon ${kind1}-icon-small`}></div>
                            <div className={`kind-icon ${kind2}-icon-small`}></div>
                        </div>
    }


    let nameFixed =     <div className="name">
                            <span>{name}</span>
                        </div>

    if(name.length > 15) {
        nameFixed =     <div className="name-treated">
                            <span>{name}</span>
                        </div>
    }

    return (
        <div id="card-front-side" className={`${kind1}-texture darken`}>
            <div className={`pokemon-icon-container ${kind1}-background-image`}>
                <img alt="" src={image_url}/>
            </div>
            {kindsBriefText}
            {nameFixed}
            <div className="stats-container">
                <div className="stats-text-container">
                    <span className="stats-text">HP</span>
                    <span className="stats-text">{HP}</span>
                </div>
                <div className="stats-text-container">
                    <span className="stats-text">ATTACK</span>
                    <span className="stats-text">{attack}</span>
                </div>
                <div className="stats-text-container">
                    <span className="stats-text">DEFENSE</span>
                    <span className="stats-text">{defense}</span>
                </div>
            </div>
            {KindsIcons}
        </div>)
}

export default CardFrontSide;