import React from 'react';

// const UserInput = (props) => {
//     return(
//         <div>
//             <input type="text" onChange={props.changed}></input>
//         </div>

//     );
// }

const UserInput = (props) => {
    return(
        <div>
            <input type="text" onChange={props.changed} value={props.userName}></input>
        </div>
    )
}

export default UserInput
