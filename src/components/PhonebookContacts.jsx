import React from 'react';

export const PhonebookContacts = ({contactsArr, deleteContactById}) => {
  return (
    <ul>
        {contactsArr.map((contact)=>{
        return <li key={contact.id}>{contact.name}: {contact.number}<button onClick={()=>{deleteContactById(contact.id)}}>x</button></li>        
        })}
    </ul>
  );
};
