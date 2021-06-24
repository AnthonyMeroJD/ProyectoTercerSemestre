import React from 'react';
import { Link } from 'react-router-dom';
function CartaComponente(params) {
    
    const {estilo, boton,
         srcImagenCarta, 
         tituloCarta, descripcionCarta, 
         categoria, valoracion,
         rating,id}=params;
    const src=srcImagenCarta||"https://image.freepik.com/free-psd/front-view-two-hard-cover-book-mockup_1150-37607.jpg";
    const estiloBase="card bg-light mb-3 shadow";      
    const estiloModificado=estiloBase.concat(" ").concat(estilo)        
    return(        
        <div className="col">            
            <div className={estiloModificado}>            
            <div className="card-header">
                <img src={src} alt=" " className="card-img-top"/>
            </div>
            <div className="card-body text-secondary">
                <h5 className="card-title">{tituloCarta||""}</h5>
                <p className="card-text">{valoracion|| ""}</p>
                <div>{rating}</div>
                <p className="card-text">{categoria||""}</p>
                <p className="card-text">{descripcionCarta||""}</p>
            </div>
            <div className="card-footer">
                {boton}          
            </div>    
            </div>
            </div>
        
    )
}
export default CartaComponente;
