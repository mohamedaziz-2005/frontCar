import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import ErrorReducer from './ErrorReducer'
import ProductReducer from './ProductReducer'
import CommandReducer from './CommandReducer'


const rootReducer = combineReducers({UserReducer , ErrorReducer, ProductReducer , CommandReducer })
export default rootReducer     

   