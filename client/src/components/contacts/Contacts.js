import React, { Fragment, useContext } from 'react'
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";


const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts,filtered } = contactContext;

    if(contacts.length===0){
        return (<h2>Please Add a Contact..</h2>);
    }
    return (
        

        <Fragment>
            {filtered !== null ? filtered.map((contact)=>{
                return (<ContactItem key={contact.id}  contact={contact} />)
            }) : contacts.map((contact)=>{
                return (<ContactItem key={contact.id}  contact={contact} />)
            })}
        </Fragment>
    )
}

export default Contacts;
