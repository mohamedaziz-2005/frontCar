import './Contact.css'; 



import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import { currentUser, updateContact } from '../../Redux/Actions/UserAction';


const EditProfil=()=>{

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(currentUser())
    },[dispatch])

    const user = useSelector(state => state.UserReducer.user)

    const [name , setName] = useState(user.name)
    const [email , setEmail] = useState(user.email)

    useEffect(()=>{
        setName(user.name)
        setEmail(user.email)
    },[user])

    const navigate = useNavigate()

    const location = useLocation()

    console.log(location)

    return(
        <div>
              <Form>
      <Form.Group className="mb-3" >
        <Form.Label className='name'> Name </Form.Label>
        <Form.Control className='name22' value={name} onChange={(e)=> setName(e.target.value)} type="Name" placeholder="Enter Name" />
      </Form.Group>

     
      <Form.Group className="mb-3" >
        <Form.Label className='email25'> Email Adress </Form.Label>
        <Form.Control className='email52' value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter Email Adress" />
      </Form.Group>

     
      <Button className='buttonsubmit2' onClick={(e)=> { e.preventDefault() ; dispatch(updateContact(user._id , {name,email} , navigate, location))}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default EditProfil  