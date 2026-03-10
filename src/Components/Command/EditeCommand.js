import './Command.css'; 

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneProduct } from "../../Redux/Actions/ProductAction"
import { commandUpdate } from "../../Redux/Actions/CommandAction"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditeCommand =()=>{

    
    const {id} = useParams()
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[dispatch, id])

    const oneCommand = useSelector(state => state.CommandReducer.oneCommand)

    const [article , setArticle] = useState(oneCommand.article)
    const [owner , setOwner] = useState(oneCommand.owner)

    
    useEffect(()=>{
        setArticle(oneCommand.article)
        setOwner(oneCommand.owner)
    },[oneCommand])

    const navigate = useNavigate()

    return(
        <div>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label className="iamge12"> Article </Form.Label>
        <Form.Control className="image13" value={article} onChange={(e)=> setArticle(e.target.value)} type="string" placeholder="Enter Article" />
      </Form.Group>

     
      <Form.Group className="mb-3" >
        <Form.Label className="text12"> Owner </Form.Label>
        <Form.Control className="text13" value={owner} onChange={(e)=> setOwner(e.target.value)} type="text" placeholder="Enter Owner" />
      </Form.Group>
     
      <Button className="submit12" onClick={(e)=> { e.preventDefault() ; dispatch(commandUpdate(id , {article,owner} , navigate))}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default EditeCommand   