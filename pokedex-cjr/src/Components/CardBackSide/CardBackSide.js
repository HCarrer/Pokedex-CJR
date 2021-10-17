import PokemonKind from '../PokemonKind/PokemonKind';
import './CardBackSide.css'

const CardBackSide = ({name, height, weight, id, kind1, kind2}) => {

    var idStr = "" + id;                                                        //trecho de codigo responsavel
    var idPad = "000";                                                          //por tratar o id e mostra-lo
    var idTreated = idPad.substring(0, idPad.length - idStr.length) + idStr;    //sempre com 3 digitos na carta

    var PokemonKind2 = <></>

    if(kind2) {
        PokemonKind2 = <PokemonKind kind={kind2}/>;
    }

    return(
    <div id="card-back-side">
        <div className="id-kind-container">
            <span>#{idTreated}</span>
            <div className="kind-container">
                <PokemonKind kind={kind1}/>
                {PokemonKind2}
            </div>
        </div>
        <div className="weight-height-container">
            <div className="weight-container">
                <span>Peso:</span>
                <span>{weight / 10}<span className="scale-label">kg</span></span>
            </div>
            <div className="height-container">
                <span>Altura:</span>
                <span>{height}<span className="scale-label">cm</span></span>
            </div>
        </div>
        <span className="name">{name}</span>
    </div>
    );
}

export default CardBackSide;