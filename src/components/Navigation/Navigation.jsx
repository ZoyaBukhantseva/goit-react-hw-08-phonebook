import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from './navigation.module.css';
import { useSelector } from "react-redux";
import { isLogedIn, isUser  } from "..//..//redux/user/userSelectors";
import { fetchLogOutUser } from "..//..//redux/user/userOperations";
import { Box, Heading } from "@chakra-ui/react"


const Navigation = () => {
         
    const user = useSelector(isUser);   
    const isAuth = useSelector(isLogedIn);
    const dispatch = useDispatch();
    
    const hedleLogOut = () => {
      dispatch(fetchLogOutUser());
    }
    
    return (
      <Box w={ '100%' } h = { 100 } shadow = { "lg" } alignItems = { "center" } 
      display={ "flex" } justifyContent={ "space-around " } p ={ 0 } position={ "relative" } zIndex = { 2 } bgColor={ '#C4F1F9' }>   

        <Heading p ={ 0 } m = { 0 } color={ "CaptionText" } textAlign={ "center"}
        mt = { 10 } mb = { 10 }  textShadow={ "2xl" }><NavLink to="/login" 
        style={ { textDecoration: 'none', color: '#086F83' } }>PHONEBOOK</NavLink></Heading>   

        <Box alignItems = { "center" } w = { "20%" }
        display={ "flex" } justifyContent={ "space-evenly" } p ={ 0 }> 


        {!isAuth && <NavLink className={ s.link } to="/login">Login</NavLink>}
        {!isAuth && <p>|</p>}
        {!isAuth && <NavLink className={ s.link } to="/register">Register</NavLink>}
        {isAuth && <p>{ user }</p>}
        {isAuth && <p>|</p>}
        {isAuth && <NavLink className={ s.link } onClick={ hedleLogOut }>LogOut</NavLink>}
        </Box>

      </Box>
    )
};

export default Navigation;
