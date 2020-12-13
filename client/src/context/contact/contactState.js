import React, { useReducer } from 'react'
import { v1 as uuidv1 } from 'uuid';
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { ADD_CONTACT, DELETE_CONTACT,SET_CURRENT,
     CLEAR_CURRENT,UPDATE_CONTACT,FILTER_CONTACTS,CLEAR_FILTER } from "../types";

const ContactState = Props =>{
    const intialState = {
        contacts: [
            {
                id: 1,
                name: "Ankush Kumar", 
                email: "ank1991@gmail.com",
                phone : "111-222-333",
                type: "personal"
            },
            {
                id: 2,
                name: "Anuradha", 
                email: "Anu1991@gmail.com",
                phone : "444-555-666",
                type: "personal"
            },
            {
                id: 3,
                name: "Julina gautam", 
                email: "jill1991@gmail.com",
                phone : "777-888-999",
                type: "professional"
            },
        ],
        current : null,
        filtered : null
    }

    const [state,dispatch] = useReducer(contactReducer, intialState);

    //ADD CONTACT
    const addContact = contact =>{
        contact.id= uuidv1();
        dispatch({ type : ADD_CONTACT, payload : contact});
    }

    //Delete CONTACT
    const deleteContact = (id)=>{
        dispatch({type: DELETE_CONTACT, payload: id});
    }

    // SET CURRENT CONTACT

    const setCurrent = (contact)=>{
        dispatch({ type: SET_CURRENT, payload: contact});
    }

    // CLEAR CURRENT CONTACT

    const clearCurrent =()=>{
        dispatch({type: CLEAR_CURRENT});
    }

    // UPDATE CONTACT

    const updateContact = (contact)=>{
        dispatch({type: UPDATE_CONTACT, payload: contact});
    }

    // FILTER CONTACTS
    const filterContacts = (text)=>{
        dispatch({type: FILTER_CONTACTS, payload: text});
    }

    // CLEAR FILTER 
    const clearFilter = ()=>{
        dispatch({type: CLEAR_FILTER})
    }




    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current : state.current,
            filtered: state.filtered,
            addContact,deleteContact,setCurrent,clearCurrent,updateContact,filterContacts,clearFilter
        }}>
            {Props.children}
        </ContactContext.Provider>
    )

};

export default ContactState;