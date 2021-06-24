
const getCategoria=(id)=>{
    switch (id) {
        case  'Terror' :
            return  1 
        break;
        case 'Fantasia' :
            return    2
        break;
        case  'Comedia'  :
            return  3
        break;
        case 'Drama':
            return 4
        break;
        default:
            break;
    }

}
const getEstado=(id)=>{
    switch (id) {
        case 'Pendiente'  :
            return   1
        break;
        case 'Vendido':
            return     2
        break;
        default:
            break;
    }

}
export {getEstado,getCategoria}