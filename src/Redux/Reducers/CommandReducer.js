import { GETALLCOMMAND, GETMYCOMMAND, GETONECOMMAND } from "../ActionTypes/CommandTypes"

const initialState = {
    commands : [],
     mycommands : [],
    onecommand : {}
}

const CommandReducer =(state = initialState , action)=>{
    switch (action.type) {
        case GETALLCOMMAND : return {...state , commands : action.payload}
        case GETMYCOMMAND : return {...state , mycommands : action.payload}
        case GETONECOMMAND : return {...state , onecommand : action.payload}
        default: return state
    }
}
export default CommandReducer 