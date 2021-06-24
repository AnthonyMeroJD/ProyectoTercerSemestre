import React from 'react'
function ComentarioComponent(params) {
    const{nick,comentario,editable,comentarioCurrent,setComentarioCurrent}=params;
    const comentarioInput=editable && <textarea 
    className="form-control" placeHolder="Tu comentario" 
    onChange={e=>{setComentarioCurrent(e.target.value)}}
    value={comentarioCurrent}/>;
    return(
        <div className="feed-border clearfix">
        <div className="feed-options"><i className="fa fa-sort-desc"></i></div>
        <div className="feed-body clearfix">
          <div className="feed-avatar">
            <img src="http://a06.t26.net/taringa/avatares/A/6/F/9/A/0/OK/48x48_BCD.jpg" alt="" />
          </div>
          <div className="feed-content">
            <div className="username">@<a href="#">{nick||""}</a></div>
            <p>
                {comentario||""}
                {comentarioInput}
            </p>
          </div>
        </div> 
      </div>

    )
}
export default ComentarioComponent;
         