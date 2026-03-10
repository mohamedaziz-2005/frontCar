import './Command.css'; 

import { useEffect } from "react"
import {  getMyCommand } from "../../Redux/Actions/CommandAction"
import { useDispatch, useSelector } from "react-redux"
import CommandCard from "./CommandCard"

const MyCommandesList =()=>{
    const dispatch = useDispatch()
     useEffect(()=>{
            dispatch(getMyCommand())
        },[dispatch])

        const mycommands = useSelector(state => state.CommandReducer.mycommands)
    return(
        <div className="mucommand">
            {
                mycommands.map((el,i,t)=> <CommandCard key={el._id} el={el}/>)
            }
        </div>
    )
}
export default MyCommandesList  