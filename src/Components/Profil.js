import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { currentUser, delelteUser } from "../Redux/Actions/UserAction"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const Profil =()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(currentUser())
    },[dispatch])

    const user = useSelector(state => state.UserReducer.user)
    const navigate = useNavigate()

    return (
        <div className="Porfil">
            <h1 className="user">{user.name}</h1>
            {/* <Button variant='danger' onClick={()=>dispatch(deleteContact(user._id))} >Delete</Button>
            <Button as={Link} to={`/EditeContact/${user._id}`}>Edite</Button> */}
              <Link to='/EditProfil' ><Button className="edite">Edite</Button></Link>
              <Link onClick={()=>dispatch(delelteUser(user._id, navigate))} ><Button className="delete">Delete</Button></Link>
        </div>
    )
}
export default Profil    