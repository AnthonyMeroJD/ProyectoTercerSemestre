const menuInvitado=()=>[{label:"Inicio",url:"/",id:1},
{label:"ingresar",url:"/ingresar",id:2 },
{label:"Registrar",url:"/registrar",id: 3}];
const menuUsuario=()=>[{label:"Inicio",url:"/",id:1},
{label:"Mis anuncios",url:"/misAnuncios",id:2 },
{label:"salir",url:"/salir",id: 3}];

const nameOfSite="La hueca del libro";
const apiBaseUrl="https://aqueous-anchorage-08800.herokuapp.com/";
const anuncios="/anuncios";
const anuncio="/anuncio";
const categoria="/categoria";
const titulo="/titulo";
const comentarios="/comentarios";
const nuevoAnuncio="/nuevoAnuncio";
const editarAnuncio="/editarAnuncio";
const nuevoUser="/nuevoUser";
const editarUser="/editarUser";
const nuevoComentario="/nuevoComentario";
const editarComentario="/editarComentario";
const user="/usuario"
const getQryApi=(...req)=>{
        let qry=apiBaseUrl;
        console.log(req);
        const data=req[0];
        data.forEach(element => {
                if (typeof element=='string') {
                  const target=element.indexOf('/')!==-1?element:"/".concat(element);          
                  qry=qry.concat(target);
                }else{ qry=qry.concat("/").concat(element)}
              
        });        
        return qry.replaceAll(",","");
}
export{menuInvitado,menuUsuario,user,
        nameOfSite,getQryApi,anuncios,categoria,
        titulo,comentarios,nuevoAnuncio,
        editarAnuncio,nuevoUser,editarUser,
        nuevoComentario,editarComentario,anuncio}