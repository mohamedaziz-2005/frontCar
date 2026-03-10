import { GETALLPRODUCT, GETONEPRODUCT } from "../ActionTypes/ProductTypes"

const initialState = {
    products : [],
    oneProduct : {}
}

const ProductReducer =(state = initialState , action)=>{
    switch (action.type) {
        case GETALLPRODUCT : return {...state , products : action.payload}
        case GETONEPRODUCT : return {...state , oneProduct : action.payload}

        default: return state

    }
}    
export default ProductReducer