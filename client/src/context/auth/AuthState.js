import React, { useReducer } from 'react'
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../util/setAuthToken";


import { REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS }  from "../types";

const AuthState = Props =>{
    const intialState = {
        token : localStorage.getItem("token"),
        isAuthenticated : null,
        user: null,
        loading : true,
        error: null
    }

    const [state,dispatch] = useReducer(authReducer, intialState);

    // LOAD USER

    const loadUser =  async()=>{
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }

        try {

            const res = await axios.get("./api/auth");

            dispatch({type: USER_LOADED , payload: res.data});
            
        } catch (error) {
            dispatch({ type : AUTH_ERROR});
        }
        
    }

    // REGISTER USER
    const register = async formData =>{
        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users', formData, config);
            console.log(res.data);
            
            dispatch({type: REGISTER_SUCCESS, payload : res.data });

            loadUser();/////Important Line /////////
        } catch (err) {
            // console.log(error);
            dispatch({type: REGISTER_FAIL, payload : err.response.data.msg})
        } 
        
    }
 
    // LOGIN USER

    const login = async formData =>{
        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/auth', formData, config);
            // console.log(res.data);
            
            dispatch({type: LOGIN_SUCCESS, payload : res.data });

            loadUser();/////Important Line /////////
        } catch (err) {
            // console.log(error);
            dispatch({type: LOGIN_FAIL, payload : err.response.data.msg})
        } 
        
    }

    // LOGOUT

    // Clear Errors
    const clearErrors = ()=>{
        dispatch({type: CLEAR_ERRORS}); 
    }




    return (
        <AuthContext.Provider value={{
            token : state.token,
            isAuthenticated : state.isAuthenticated,
            user: state.user,
            loading : state.loading,
            error: state.error,
            register, clearErrors,loadUser,login
        }}>
            {Props.children}
        </AuthContext.Provider>
    )

};

export default AuthState;