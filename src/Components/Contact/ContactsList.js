import './Contact.css'; 



import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ContactCard from './ContactCard'
import { getAllContacts } from '../../Redux/Actions/UserAction'

const ContactsList=()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllContacts())
    },[dispatch])

    const contacts = useSelector(state => state.UserReducer.contacts)

    return(
        <div>
            {
                contacts.map((el,i,t)=> <ContactCard key={el._id} el={el}/>)
            }
        </div>
    )
}
export default ContactsList