import './Contact.css'; 



import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { deleteContact } from '../../Redux/Actions/UserAction';



const ContactCard=({el})=>{
    const dispatch = useDispatch('')
    return(
        <div>
            <Card className='card' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className='title'>{el.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{el.age}</Card.Subtitle>
                <Card.Text className='text'>
                    {el.email}
                </Card.Text>
                <Button className='delete' variant='danger' onClick={()=>dispatch(deleteContact(el._id))}>Delete</Button>
                <Link to={`/EditeContact/${el._id}`} ><Button className='edite'>Edite</Button></Link>
             </Card.Body>
            </Card>
        </div>
    )
}
export default ContactCard