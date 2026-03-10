import './Product.css';

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneProduct, productUpdate } from "../../Redux/Actions/ProductAction"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProductEdite =()=>{

    const {id} = useParams()
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[dispatch, id])

    const oneProduct = useSelector(state => state.ProductReducer.oneProduct)

    const [image , setImage] = useState(oneProduct.image)
    const [text , setText ] = useState(oneProduct.text)
    const [prix , setPrix ] = useState(oneProduct.prix)


    useEffect(()=>{
        setImage(oneProduct.image)
        setText(oneProduct.text)
        setPrix(oneProduct.prix)
    },[oneProduct])

    const navigate = useNavigate()


    return (
        <div>
            <Form>
      <Form.Group className="mb-3" >
        <Form.Label className="iamge12"> Image </Form.Label>
        <Form.Control className="image13" value={image} onChange={(e)=> setImage(e.target.value)} type="text" placeholder="Enter image" />
      </Form.Group>

     
      <Form.Group className="mb-3" >
        <Form.Label className="text12"> Text </Form.Label>
        <Form.Control className="text13" value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="Enter text" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="prix12"> Prix </Form.Label>
        <Form.Control className="prix13" value={prix} onChange={(e)=> setPrix(e.target.value)} type="number" placeholder="Enter number" />
      </Form.Group>
     
      <Button className="submit12" onClick={(e)=> { e.preventDefault() ; dispatch(productUpdate(id , {image,text,prix} , navigate))}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default ProductEdite