import React from 'react';
import ContactListItem from './ContactListItem';
import {useSelector, useDispatch } from "react-redux";
import {fetchAllContacts } from "../../redux/contacts/contact-operations";
import { useEffect } from 'react';
import { selectFileteredContacts} from "..//..//redux/contacts/contact-selectors"
import { OrderedList } from '@chakra-ui/react'
const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllContacts());
  }, [dispatch])

  const filteredContacts = useSelector(selectFileteredContacts);
    return (
      <OrderedList p = { 0 } m= { 0 } display ={ 'flex' } flexDirection = { 'column' } alignItems={ 'self-start' }>
        { filteredContacts.map((element)=> {
          return <ContactListItem key = { element.id }
             id = { element.id }
             name = { element.name }
             phone = { element.number }
          />
        }) }
       </OrderedList> 
    );
}

export default ContactList;