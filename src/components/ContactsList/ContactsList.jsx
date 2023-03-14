import React from 'react';
import ContactListItem from './ContactListItem';
import {useSelector, useDispatch } from "react-redux";
import {fetchAllContacts } from "../../redux/contacts/contact-operations";
import { useEffect } from 'react';
import { selectFileteredContacts} from "..//..//redux/contacts/contact-selectors"
const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllContacts());
  }, [dispatch])

  const filteredContacts = useSelector(selectFileteredContacts);
    return (
      <ul>
        { filteredContacts.map((element)=> {
          return <ContactListItem key = { element.id }
             id = { element.id }
             name = { element.name }
             phone = { element.phone }
          />
        }) }
      </ul>   
    );
}

export default ContactList;