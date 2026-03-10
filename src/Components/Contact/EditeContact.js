import './Contact.css'; 



import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import { getOneContact, updateContact } from '../../Redux/Actions/UserAction';


const EditeContact=()=>{

    const {id} = useParams()
    console.log(id)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getOneContact(id))
    },[dispatch, id])

    const oneContact = useSelector(state => state.UserReducer.oneContact)

    const [name , setName] = useState(oneContact.name)
    const [email , setEmail] = useState(oneContact.email)

    useEffect(()=>{
        setName(oneContact.name)
        setEmail(oneContact.email)
    },[oneContact])

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

     
      <Button className='buttonsubmit2' onClick={(e)=> { e.preventDefault() ; dispatch(updateContact(id , {name,email} , navigate,location))}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default EditeContact  