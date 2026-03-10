import axios from "axios"
import { GETALLPRODUCT, GETONEPRODUCT } from "../ActionTypes/ProductTypes"

const apiUrl = process.env.REACT_APP_API_URL

export const getAllProduct =()=>async(dispatch)=>{
    try {
        console.log(apiUrl)
        console.log(`${apiUrl}/api/product/getAllProduct`)
        const res = await axios.get(`${apiUrl}/api/product/getAllProduct` )
        dispatch(
            {
                type : GETALLPRODUCT,
                payload : res.data.products
            }
        )
    } catch (error) {
        console.log(error)
    }   
}

export const getOneProduct=(id)=>async(dispatch)=>{   
    try {
        const res = await axios.get(`${apiUrl}/api/product/getOneProduct/${id}`)
        dispatch(
            {
                type : GETONEPRODUCT,
                payload : res.data.product  
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const productAdd=(newProduct , navigate)=>async(dispatch)=>{
    try {
        await axios.post(`${apiUrl}/api/product/addproduct`, newProduct)
        dispatch(getAllProduct())
        navigate('/ProductsList')
    } catch (error) {
        console.log(error)
    }
}


export const productUpdate=(id,modifProduct,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`${apiUrl}/api/product/updateProduct/${id}`, modifProduct)
        dispatch(getAllProduct())
        navigate('/ProductsList')
    } catch (error) {
        console.log(error)
    }
}

export const ProductDelete=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`${apiUrl}/api/product/deleteProduct${id}` )
        dispatch(getAllProduct())
    } catch (error) {
        console.log(error)
    }
}