import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='userOutput'>
            <p>Username: {props.userName}</p>
            <p>We are going to make placeholder text great again. Greater than ever before. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.</p>
        </div>
    )
    
}
export default userOutput;