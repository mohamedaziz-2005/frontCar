import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../Redux/Actions/UserAction'
const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
     <Form className='login'>


      <Form.Group className="mb-3">
        <Form.Label className='email'>Email address</Form.Label>
        <Form.Control className='email1' onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='pass'>Password</Form.Label>
        <Form.Control className='pass1' onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={(e)=>{e.preventDefault(); dispatch(login({email, password},navigate))}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Login