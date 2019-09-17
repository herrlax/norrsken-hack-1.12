import React, { Component, MouseEvent } from 'react'


const Button: React.FC = ({ children }) => {
	const handleClick = (event: MouseEvent) => {
    
    event.preventDefault();
    
    alert(event.currentTarget.tagName); // alerts BUTTON
	}

    return ( 
    	<button onClick={handleClick}>
	    	{children}
	    </button>
	);
}

export default Button