import { CURRENTUSER, FAIL, GETALLCONTACTS, GETONECONTACT, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/UserTypes"

const initialState = {
    user : {},
    errors : [],
     contacts : [],
    oneContact : {}
}

const UserReducer =(state = initialState , action)=>{
    switch (action.type) {
       case FAIL :  return {...state, errors : action.payload}

        case REGISTER : 
        localStorage.setItem("token" , action.payload.token)
        return {...state , user : action.payload.account , errors : []}

        case LOGIN : 
        localStorage.setItem("token" , action.payload.token)
        return {...state , user : action.payload.found , errors : []}

        case CURRENTUSER : return {...state , user : action.payload}

        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state , user : {} , errors : []}

        case GETALLCONTACTS : return {...state , contacts : action.payload}
        case GETONECONTACT : return {...state , oneContact : action.payload}
        
        default: return state
    }
}
export default UserReducer