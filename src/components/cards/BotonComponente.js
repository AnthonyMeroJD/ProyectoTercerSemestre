import React from 'react';
function BotonComponente (params){
    const {textBoton} = params;
    return(
        <div>
            <button type="button" className="btn btn-secondary btn-lg">
                {textBoton}
            </button>
        </div>
    )
}
export default BotonComponente;