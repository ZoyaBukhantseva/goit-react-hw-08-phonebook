import { useSelector, useDispatch } from "react-redux";
import { updFilter } from '..//..//redux/filter/filterSlise';
import { selectFiltrState } from '..//..//redux/selectors';

import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react"

const Filter = ( ) => {

    const filterState = useSelector(selectFiltrState);
    const dispatch = useDispatch();

    const  hendleChange = (e) => {
        const findName = e.currentTarget.value;
        dispatch(updFilter(findName));
     };

    return (
        <Box 
        backgroundColor={ 'Window' }
        p={ '5' } ml = {'auto'} mr = {'auto'} mt = { 0 }  h={ 50 } display={ 'flex' } flexDirection={ 'column' }
        alignItems = { 'center' } justifyContent = { 'center' }  borderRadius = { 15 }>
        <FormControl>
        <FormLabel color={ 'InfoText' }  fontSize={ 15 } textAlign={'center'} fontWeight={ 700 }>Find contacts by name
          <Input bgColor={ '#BEE3F8' } shadow={ 'inner' } mt = { 2 } h = { 7 }
             onChange={ hendleChange } 
             value={ filterState }
             type="text"
             name="filter"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required>
             </Input>
         </FormLabel>
         </FormControl>
         </Box>
     )
};

export default Filter;