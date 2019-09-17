import React from 'react';
const Button: React.FC = ({ children, ...otherProps }) => {
  return <button {...otherProps}>{children}</button>;
};

export default Button;
