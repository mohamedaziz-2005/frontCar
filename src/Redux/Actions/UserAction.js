import { CURRENTUSER, FAIL, GETALLCONTACTS, GETONECONTACT, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/UserTypes"
import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL


export const register=(cordUser , navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post (`${apiUrl}/api/user/SignUp` , cordUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/Profil')

    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )

        // error.response.data.errors.forEach(element => {
        //     dispatch(handleError(element.msg))
        // });
    }
}

export const login=(cordUser , navigate)=>async(dispatch)=>{
    try {

        console.log(cordUser)
        const res = await axios.post(`${apiUrl}/api/user/SignIn` , cordUser)
        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate('/Profil')

    } catch (error) {
          dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
        // error.response.data.errors.forEach(element => {
        //     dispatch(handleError(element.msg))
        // });
    }
}


export const currentUser =()=>async(dispatch)=>{
    try {

        const config = {
            headers : {
                authorized : localStorage.getItem('token')
            }
        }
        const res = await axios.get(`${apiUrl}/api/user/CurrentUser`,config)

        dispatch(
            {
                type  :CURRENTUSER,
                payload : res.data
            }
        )



    } catch (error) {
         dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}


export const logout =()=>{
    return (
        {
            type : LOGOUT
        }
    )
}



export const getAllContacts =()=>async(dispatch)=>{
    try {
        const res = await axios.get(`${apiUrl}/api/user/getAllContacts`)

        dispatch(
            {
                type : GETALLCONTACTS,
                payload : res.data.contacts 
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addContact =(newContact , navigate)=>async(dispatch)=>{
    try {
        await axios.post(`${apiUrl}/api/user/addContacts`, newContact)
        dispatch(getAllContacts())
        navigate('/ContactsList')
    } catch (error) {
     console.log(error)       
    }
}


export const getOneContact =(id)=>async(dispatch)=>{
    try {

       
        const res = await axios.get(`${apiUrl}/api/user/getContact/${id}`)

        dispatch(
            {
                type : GETONECONTACT,
                payload : res.data.found
            }
        )
    } catch (error) {
        console.log(error)
    }

}

export const updateContact =(id,modifContact,navigate, location)=>async(dispatch)=>{
    try {
        await axios.put(`${apiUrl}/api/user/updateContact/${id}` , modifContact)
        dispatch(getAllContacts())
        if (location.pathname === '/EditProfil' ) {
            navigate('/Profil')
        } else {
            navigate('/ContactsList')
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact =(id)=>async(dispatch)=>{
    try {
        await axios.delete(`${apiUrl}/api/user/deleteContact/${id}`)
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}

export const delelteUser =(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`${apiUrl}/api/user/deleteContact/${id}` )
        dispatch(logout())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}