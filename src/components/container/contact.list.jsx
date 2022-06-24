
import React from 'react';
import PropTypes from 'prop-types';
import ComponentA from '../pure/componentA';
import { contact } from '../../models/contacto.class';

const ContactList = () => {
    const defaulContact = new contact('fistName', 'lastName', 'asjsa@dsd', false)
    
    return (
        <div>
           <ComponentA contact={defaulContact}></ComponentA> 
        </div>
    );
};




export default ContactList;
