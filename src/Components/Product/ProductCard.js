import './Product.css';

import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCommand } from '../../Redux/Actions/CommandAction';
import { currentUser } from '../../Redux/Actions/UserAction';
import { useEffect } from 'react';

const ProductCard =({el,commands})=>{
  

   const dispatch = useDispatch()
     useEffect(()=>{
           dispatch(currentUser())
      },[dispatch])
   const user = useSelector(state => state.UserReducer.user)
   const isAdmin = user?.role === "admin"
   const navigate = useNavigate()
   var x = commands.filter((item,i,t)=> item?.article?._id === el._id).find((comm,i,t)=> comm?.owner?._id === user._id )
   console.log("testets",x)
    return (
        <div>
             <Card className='card' style={{ width: '18rem' }}>
      <Card.Img className='image11' variant="top" src={el.image} alt='Not Found' />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='text11'>
          {el.text}
        </Card.Text>
        <Card.Text className='prix11'>
          {el.prix}
        </Card.Text>
        {
          isAdmin && (
            <Link to={`/ProductEdite/${el._id}`} ><Button className='edite22'>Edite</Button></Link>
          )
        }
        {
          x === undefined && <Button className='command' onClick={()=>{dispatch(addCommand({article : el._id, owner : user._id}, navigate))}}>Command</Button> 
        }
        
      </Card.Body>
    </Card>
        </div>
    )
}
export default ProductCard   