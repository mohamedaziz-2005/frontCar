import './Command.css'; 
import { useEffect } from "react"
import { getAllCommand } from "../../Redux/Actions/CommandAction"
import { useDispatch, useSelector } from "react-redux"
import CommandCard from "./CommandCard"
import { currentUser } from '../../Redux/Actions/UserAction';

const CommandsList =()=>{
    const dispatch = useDispatch()
     useEffect(()=>{
            dispatch(getAllCommand())
             dispatch(currentUser())
        },[dispatch])

        const commands = useSelector(state => state.CommandReducer.commands)
            const user = useSelector(state => state.UserReducer.user)
    return(
        <div className="divlist">
            {
                commands.map((el,i,t)=> <CommandCard key={el._id} el={el} user={user}/>)
            }
        </div>
    )
}
export default CommandsList  