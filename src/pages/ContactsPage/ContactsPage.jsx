import ContactList from "..//..//components/ContactsList/ContactsList";
import ContactForm from "..//..//components/ContactForm/ContactForm";
import Filter from "..//..//components/Filter/Filter";
import bg from '..//..//source/pngtree-memphis-note-ripped-paper-notebook-background-picture-image_1739025.jpg';
import Loading from "..//..//components/Loading/Loading";

import { Box, Heading } from "@chakra-ui/react";

const Contacts = () => {

   return (<>
            <Loading/>
            <Heading p ={ 0 } m = { 0 } color={ "CaptionText" } textAlign={ "center"}
              mb = { 10 } shadow={ "2xl" } pb = { 3 } pt = { 2 } bgColor={ 'AppWorkspace' } opacity={ 0.7 } 
             position={ "relative" } zIndex = { 2 } >Contacts</Heading>

            <Box  backgroundImage ={ bg } position={ "fixed" } 
            w={ '100%' } h ={ '100%' } opacity={ 0.1 } top = {-2 } ></Box>
            
            <Box  display={ 'flex' } flexDirection={ "column" } position={ "relative" } >

            <ContactForm />
            
            <Box 
            backgroundColor={ 'Window' }
            shadow={ 'dark-lg' }
            p={ '10' } m = {'auto'} mt = { 5 } w={ 330 } display={ 'flex' } flexDirection={ 'column' }
            alignItems = { 'center' } justifyContent = { 'flex-start' }  borderRadius = { 20 }>
               <Heading p ={ 0 } m = { 0 } color={ "CaptionText" }>Your contacts</Heading>
               <Filter />
               <ContactList />
            </Box>
            </Box>
            
            
   </>);
};

export default Contacts;