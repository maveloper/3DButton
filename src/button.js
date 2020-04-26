import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
const Button3D = ({height="100px",width="150px",color="teal",title}) => <a
className="button3D" style={{height,width,backgroundColor:color}}href="#" title={title}>{title}</a>

Button3D.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string
};


export default Button3D;
