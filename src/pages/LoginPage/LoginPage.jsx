import { useDispatch } from 'react-redux';
import { fetchLoginUser } from 'redux/user/userOperations';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Loading from "..//..//components/Loading/Loading";
import Error from '..//..//components/ContactsList/Error';

import bg from '..//..//source/best-wallpaper_skobka_84.jpg';

import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const LoginPage =()=> {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hendleSubmit = e => {

        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const redy = dispatch(fetchLoginUser({email, password}));
        redy.then(res => {if(res.type === "user/fetchLoginUser/fulfilled"){ navigate("/contacts", { replace: true })}})
    };

    return (
        <>
        <Error/>
        <Loading/>
        <Box  backgroundImage ={ bg } position={ "fixed" } 
        w={ '100%' } h ={ '100%' } opacity={ 1 } top = {-2 } bgRepeat={ 'no-repeat' } bgPosition={ 'center' }></Box>
        <form onSubmit={ hendleSubmit }>
        <Box 
          backgroundColor={ '#5a5a5fb2' }
          shadow={ 'dark-lg' }
          p={ '10' } m = {'auto'} mt = { 10 } w={ 330 } h={ 240 } display={ 'flex' } flexDirection={ 'column' }
          alignItems = { 'center' } justifyContent = { 'center' }  borderRadius = { 15 } position={ "relative" }>
              <FormControl>
                <FormLabel color={ 'InfoText' } fontSize={ 15 } fontWeight={ 700 }>E-mail
                    <Input bgColor={ '#BEE3F8' } shadow={ 'inner' } mt = { 2 }
                      type="email"
                      name="email"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required>
                    </Input>
                </FormLabel>
              
                <FormLabel color={ 'InfoText' } fontSize={ 15 } mt = { 5 } fontWeight={ 700 }>Password
                    <Input bgColor={ '#BEE3F8' } shadow={ 'inner' } mt = { 2 }
                      type="password"
                      name="password"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                    />
                </FormLabel>
              </FormControl>
                <Button  bgColor={ '#BEE3F8' } color={ 'ButtonText' } w ={ 100 }  padding = { 2 } mt = { 5 } mb = {2} type="submit">Login</Button>
                <NavLink to="/register" style={{ color: '#BEE3F8', fontSize: 20 }}>or Register</NavLink>
            </Box>
          </form>
          </>
    );
};

export default LoginPage;