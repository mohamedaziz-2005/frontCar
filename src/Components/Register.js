import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../Redux/Actions/UserAction'


const Register = () => {
    const [name , setName] = useState('')
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

  return (
     <Form className='regis'>

      <Form.Group className="mb-3">
        <Form.Label className='name'>Name</Form.Label>
        <Form.Control className='name2' onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='email'>Email address</Form.Label>
        <Form.Control className='email2' onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='pass'>Password</Form.Label>
        <Form.Control className='pass2' onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Button className='submi2' onClick={(e)=> {e.preventDefault() ; dispatch(register({name , email ,password}, navigate))}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Register