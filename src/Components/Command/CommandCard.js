import './Command.css'; 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  Navigate } from 'react-router-dom';
import { commandDelete, commandUpdate } from '../../Redux/Actions/CommandAction';
import { useDispatch } from 'react-redux';

const CommandCard =({el, user})=>{
  const dispatch = useDispatch()
    return(
        <div>

        <Card className='Card'>
      <Card.Header></Card.Header>
      <Card.Body className='cardbody'>
        <Card.Title className='cardtitle'>{el?.owner?.name}</Card.Title>
        <Card.Text className='cardtext'>
          {el?.article?.text}
        </Card.Text> 
        {/* <Button variant="primary">Buy</Button> 
        <Link to={`/EditeCommand/${el._id}`} ><Button className='edite22'>Edite</Button></Link> */}
        <Card.Text className='elstatus'>
          {el?.status}
        </Card.Text>

        {
          user?.role !== "admin"&&  <Button className='button delete' onClick={()=>{dispatch(commandDelete(el._id, Navigate))}}>Delete</Button>
        }
        {/* <Button className='button delete' onClick={()=>{dispatch(commandDelete(el._id, Navigate))}}>Delete</Button> */}

         {el?.status === "Pending" && user?.role === "admin"&& 
         <>
         <Button className='accepte' variant='success' onClick={()=>{dispatch(commandUpdate(el._id,{status : "Accepted"}, Navigate))}}>Accept</Button>
          <Button className='reject' variant='danger' onClick={()=>{dispatch(commandUpdate(el._id,{status : "Rejected"}, Navigate))}}>Reject</Button>
         </>}
         

      </Card.Body>
    </Card>

        </div>
    )
}
export default CommandCard