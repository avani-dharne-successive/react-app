import React from 'react';



const Validation = (props) => {

    let validationResult = undefined

    if(props.textLength > 0){
        validationResult = props.textLength < 5 ? 'Text too short' : 'Text long enough'

    }

    return (
        <div>
            <p>{validationResult}</p>
            <p></p>
        </div>



    );

}

export default Validation