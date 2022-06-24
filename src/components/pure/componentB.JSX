import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../models/contacto.class';


const ComponentB = (prop) => {
    const [conectado,setconectado]= useState(false)
    const changeState = ()=>{
        if(conectado === false){
            setconectado(conectado === true)
        }else{
            setconectado(conectado === false)
        }
        
    }
    return (
        <div>
            Conectado: {changeState}
        </div>

    );
};




export default ComponentB;
