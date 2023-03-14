import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '..//..//shared/servises/contacts-api'

export const fetchAllContacts = createAsyncThunk("contacts/fetchAll", async(_, thunkAPI) =>{
    try{
        const auth = thunkAPI.getState();
        return await api.getAllContscts(auth.auth.token);
    }
    catch({response}){
        return thunkAPI.rejectWithValue(response.data);
    }
});

export const fetchAddContacts = createAsyncThunk("contacts/fetchAddContact", async({name, number}, thunkAPI) =>{
    try{
        const auth = thunkAPI.getState();
        return await api.addContact({ name, number }, auth.auth.token);
    }
    catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
},
{
    condition: ({name}, {getState}) => {
        const {contacts} = getState();

        const isPresentContact = contacts.items.find(element => 
            element.name.toLowerCase() === name.toLowerCase()
        );

        if (isPresentContact) { 
            alert('Contact is already exist!')
            return false;
        };
    }
});

export const fetchDelContact = createAsyncThunk("contacts/fetchDelContact", async(id, thunkAPI) => {
    try {
        const auth = thunkAPI.getState();
        await api.delContact(id, auth.auth.token);
        return id;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});