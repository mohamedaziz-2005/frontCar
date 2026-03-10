import axios from "axios"
import { GETALLCOMMAND, GETMYCOMMAND, GETONECOMMAND } from "../ActionTypes/CommandTypes"

const apiUrl = process.env.REACT_APP_API_URL


export const getAllCommand =()=>async(dispatch)=>{
    try {
       const res = await axios.get(`${apiUrl}/api/commande/getAllCommends`) 
       dispatch (
        {
            type : GETALLCOMMAND, 
            payload : res.data.commends
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const getMyCommand =()=>async(dispatch)=>{
    try {
        const config = {
            headers : {
                authorized : localStorage.getItem('token')
            }
        }

       const res = await axios.get(`${apiUrl}/api/commande/getMyCommends`, config) 
       dispatch (
        {
            type : GETMYCOMMAND, 
            payload : res.data.commends
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const getOneCommand =(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`${apiUrl}/api/commande/getOneCommend/${id}`)
        dispatch (
            {
                type : GETONECOMMAND ,
                payload : res.data.onecommand
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addCommand =(newCommand , navigate)=>async(dispatch)=>{
    try {
        await axios.post(`${apiUrl}/api/commande/addCommend`, newCommand)
        dispatch (getAllCommand())
        navigate ('/CommandsList')
    } catch (error) {
        console.log(error)
    }
}

export const commandUpdate = (id , modifCommand , navigate)=>async(dispatch)=>{
    try {
        await axios.put(`${apiUrl}/api/commande/updateCommend/${id}` , modifCommand) 
        dispatch(getAllCommand())
        navigate('/CommandsList')
    } catch (error) {
        console.log(error)
    }
}

export const commandDelete =(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`${apiUrl}/api/commande/deleteCommend/${id}`)
        dispatch(getAllCommand())
        navigate('/CommandsList')
    } catch (error) {
        console.log(error)
    }
}