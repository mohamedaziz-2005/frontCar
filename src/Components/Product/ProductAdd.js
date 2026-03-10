import './Product.css'; 



import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { productAdd } from "../../Redux/Actions/ProductAction";

const ProductAdd =()=>{

    const [image , setImage] = useState('')
    const [text , setText] = useState('')
    const [prix , setPrix] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

 
    return (
        <div>
            <Form>
      <Form.Group className="mb-3" >
        <Form.Label className="image"> Image </Form.Label>
        <Form.Control className="imge2" onChange={(e)=> setImage(e.target.value)} type="text" placeholder="Enter imge" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="text"> Text </Form.Label>
        <Form.Control className="text2" onChange={(e)=> setText(e.target.value)} type="text" placeholder="Enter text" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="prix"> Prix </Form.Label>
        <Form.Control className="prix2" onChange={(e)=> setPrix(e.target.value)} type="number" placeholder="Enter prix" />
      </Form.Group>

     
      <Button className="submit" onClick={(e)=> { e.preventDefault() ; dispatch(productAdd({image,text,prix} , navigate))}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default ProductAdd  