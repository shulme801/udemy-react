import React from 'react';

const userInput = (props) => {
    return (
        <p>This is user input: 
        <input type="text" onChange={props.changed} />
        </p>
    )
}

export default userInput;