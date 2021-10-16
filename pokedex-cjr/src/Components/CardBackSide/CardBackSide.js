import './CardBackSide.css'

const CardBackSide = ({name, height, weight, id, kind}) => {

    var idStr = "" + id;                                                        //trecho de codigo responsavel
    var idPad = "000";                                                          //por tratar o id e mostra-lo
    var idTreated = idPad.substring(0, idPad.length - idStr.length) + idStr;    //sempre com 3 digitos na carta

    return(
    <div id="card-back-side">
        <div className="id-kind-container">
            <span>#{idTreated}</span>
            {/* <span>{kind}</span> */}
            <div className="kind-container">
                <div className="kind"></div>
                <div className="kind"></div>
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