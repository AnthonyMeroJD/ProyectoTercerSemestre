
const getCategoria=(id)=>{
    switch (id) {
        case  'Terror' :
            return  5 
        break;
        case 'Fantasia' :
            return    2
        break;
        case  'Comedia'  :
            return  15
        break;
        case 'Drama':
            return 25
        break;
        default:
            break;
    }

}
const getEstado=(id)=>{
    switch (id) {
        case 'Pendiente'  :
            return   5
        break;
        case 'Vendido':
            return    15
        break;
        default:
            break;
    }

}
export {getEstado,getCategoria}