import React,{ Fragment} from 'react';
function RatingComponente(params) {
    const titulos =["1 estrella","2"]    
    const {id}=params;
    const r=titulos.map((titulo,index)=>
        <Fragment key={"".concat(id).concat(index)}>
        <input  type="radio" id={"".concat(id).concat(index)}name={"rating".concat(id).concat(index)} value={index+1} /><label htmlFor={"".concat(id).concat(index)} title="Kinda bad">{index+1} stars</label>
        </Fragment>
    );
  
    return(
	<div className="row">
	<div className="rating">        
        {r}
    
    </div>
	</div>
)
    
}
export default RatingComponente;