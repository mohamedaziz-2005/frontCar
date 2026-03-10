import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { logout } from '../Redux/Actions/UserAction';

const NavAuth =()=>{


  const token = localStorage.getItem('token')
  const user = useSelector(state => state.UserReducer.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()
    return (
        <div className='navauth'>
            <Navbar className='nav' bg="dark" data-bs-theme="dark">
        <Container className='container'>
          <Navbar.Brand className='home' href="#home">SHOW ROOM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='home1' as={Link} to='/'>Home</Nav.Link>


            {
              token && user ?
              <>
                <Nav.Link className='profil' as={Link} to='/Profil'>Profil</Nav.Link>
                <Nav.Link className='logout' onClick={()=> {dispatch(logout()) ;navigate('/') }}>Logout</Nav.Link>
                {
                  user.role !== "admin" &&   <Nav.Link className='Commes' as={Link} to='/MyCommandsList'>My Commendes</Nav.Link>  
                  }
              
                {
                  user.role === "admin" &&
                  <>
                    <Nav.Link className='addpro' as={Link} to='/ProductAdd'>AddProduct</Nav.Link>
                    <Nav.Link className='Comm' as={Link} to='/CommandsList'>Commendes</Nav.Link>
                    <Nav.Link className='contlist' as={Link} to='/ContactsList'>Contacts</Nav.Link>
                  </>
                }
                
                    
              </>
              : 
              <>
                <Nav.Link className='regi' as={Link} to='/Register'>Register</Nav.Link>
                <Nav.Link className='log' as={Link} to='/Login'>Login</Nav.Link>
              </>
            }





            
            {/* <Nav.Link as={Link} to='/AddContact'>Add Contact</Nav.Link>  */}
            <Nav.Link className='prod' as={Link} to='/ProductsList'>Product</Nav.Link>
            
            
            
            
            

          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
export default NavAuth 