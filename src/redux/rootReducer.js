import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import contactsReduser from "./contacts/contactSlise";
import filterReducer from "./filter/filterSlise";
import userReducer from './user/userSlise';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReducer,
    auth: persistedReducer,
});

export default rootReducer;