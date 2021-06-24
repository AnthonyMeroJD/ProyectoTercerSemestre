import React from 'react'
function AlertsComponente(params) {
    const {type,info}= params;    
    
    const customStyle=type=="error"?"alert-danger":"alert-success";
    return(
        <div class={"alert ".concat(customStyle)} role="alert">
                {info}
        </div>
    );
}
export default AlertsComponente