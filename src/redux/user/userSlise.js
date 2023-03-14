import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginUser, fetchSignUpUser, fetchLogOutUser, fetchCurrentUser } from "..//user/userOperations";

const initialUser = {
    user: {},
    token: "",
    isLoading: false,
    isLogin: false,
    error: null
};


const userSlice = createSlice({
    name: "auth",
    initialState: initialUser,
    extraReducers: buider => {
        buider
        .addCase(fetchLoginUser.pending, (store) => {
           store.isLoading = true;
           store.error = null;
        })
        .addCase(fetchLoginUser.fulfilled, (store, { payload }) => {
            const { user, token } = payload;
            store.isLoading = false; 
            store.error = null;
            store.user = user;
            store.token = token;
            store.isLogin= true;
        })
        .addCase(fetchLoginUser.rejected, (store, { payload }) => {
            store.isLoading = false; 
            store.error = payload;
        }) 
        .addCase(fetchSignUpUser.pending, (store) => {
            store.isLoading = true;
            store.error = null;
         })
         .addCase(fetchSignUpUser.fulfilled, (store, { payload }) => {
            const { user, token } = payload;
            store.isLoading = false; 
            store.error = null;
            store.user = user;
            store.token = token;
            store.isLogin= true;
         })
         .addCase(fetchSignUpUser.rejected, (store, { payload }) => {
            store.isLoading = false; 
            store.error = payload;
        })
        .addCase(fetchLogOutUser.pending, (store) => {
            store.isLoading = true;
            store.error = null;
         })
         .addCase(fetchLogOutUser.fulfilled, (store) => {
             store.isLoading = false; 
             store.user = {};
             store.token = "";
             store.isLogin= false;
         })
         .addCase(fetchLogOutUser.rejected, (store, { payload }) => {
             store.isLoading = false; 
             store.error = payload;
         })
         .addCase(fetchCurrentUser.pending, (store) => {
            store.isLoading = true;
            store.error = null;
         })
         .addCase(fetchCurrentUser.fulfilled, (store, { payload }) => {
            const { name, email } = payload;
            store.isLoading = false; 
            store.user = { name: name, email: email };
            store.isLogin= true;
         })
         .addCase(fetchCurrentUser.rejected, (store, { payload }) => {
            store.isLoading = false; 
            store.token = "";
            store.error = payload;
        })
    } 
});


export default userSlice.reducer;