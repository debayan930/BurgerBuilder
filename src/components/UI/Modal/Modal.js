import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    return(
        <div
            className={classes.Modal}
            style={
                {
                    transform: props.ordered ? 'translateY(0)' : 'translate(-100vh)',
                    opacity: props.ordered ? '1' : '0'
                }
            }
        >
            {props.children}
        </div>
    );
};

export default Modal;