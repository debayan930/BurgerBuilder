import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.buyMode !== this.props.buyMode;
    }

    render(){
        return(
            <Aux>
                <Backdrop buyMode={this.props.buyMode} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={
                        {
                            transform: this.props.buyMode ? 'translateY(0)' : 'translate(-100vh)',
                            opacity: this.props.buyMode ? '1' : '0'
                        }
                    }
                >
                    {this.props.children}
                </div>
            </Aux>        
        );
    }
};

export default Modal;