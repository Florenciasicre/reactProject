
import React from 'react';
import PropTypes from 'prop-types';
import ComponentB from "./componentB.JSX";

const ComponentA = ({contact}) => {
    return (
        <div>
           <h2>Nombre: { contact.Nombre } </h2> 
           <h2>Apellido: { contact.Apellido }</h2>
           <h4>Email: { contact.Email } </h4>
           <h4>conectado: </h4>
        </div>
    );
};


ComponentA.propTypes = {
    Name : PropTypes.string,
    Apellido: PropTypes.string,
    Email: PropTypes.string,
    conectado: PropTypes.bool

};


export default ComponentA;
