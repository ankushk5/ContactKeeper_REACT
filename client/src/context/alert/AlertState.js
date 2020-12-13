import React,{useReducer} from "react";
import { v1 as uuidv1 } from 'uuid';
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";



import { REMOVE_ALERT, SET_ALERT }  from "../types"; 

const AlertState = Props =>{
    const intialState = [];

    const [state,dispatch] = useReducer(alertReducer, intialState);


    const setAlert = (msg,type,timeout=5000)=>{
        const id=uuidv1();

        dispatch({type: SET_ALERT, payload: {msg, type,id}});
        setTimeout(()=> dispatch({type: REMOVE_ALERT, payload : id }),timeout)
    }
    


    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {Props.children}
        </AlertContext.Provider>
    )

};

export default AlertState;