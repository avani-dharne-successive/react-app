import React from 'react';


const Char = (props) => {
  
  
return(
    <div >
        <p onClick={props.clicked}>{props.charInput}</p>
    </div>

);

}

export default Char