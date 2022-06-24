import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage]= useState(24);
    const birthday = ()=>{
      setage(age +1)
    }
    return (
        <div>
              <h1>
                Hola {props.name} desde componente funcional
                </h1>
                {<h2>
                    Age: {age}
                </h2> }
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div> 
            </div>
    );
};


GreetingF.propTypes = {
  
};


export default GreetingF;
