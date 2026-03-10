import './Contact.css'; 


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addContact } from '../../Redux/Actions/UserAction';

const AddContact=()=>{

    const [name , setName] = useState('')
    const [age , setAge] = useState(0)
    const [email , setEmail] = useState('')


    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return(
        <div>
            <Form>
      <Form.Group className="mb-3" >
        <Form.Label className='Name1'> Name </Form.Label>
        <Form.Control className='name2' onChange={(e)=> setName(e.target.value)} type="Name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='age1'> Age </Form.Label>
        <Form.Control className='age2' onChange={(e)=> setAge(e.target.value)} type="Number" placeholder="Enter Age" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='email1'> Email Adress </Form.Label>
        <Form.Control className='email2' onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter Email Adress" />
      </Form.Group>

     
      <Button className='buttonsubmit' onClick={(e)=> { e.preventDefault() ; dispatch(addContact({name,age,email} , navigate))}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default AddContact