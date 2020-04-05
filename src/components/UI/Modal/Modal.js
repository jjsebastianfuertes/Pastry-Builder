import React, { Component } from 'react';
import mStyles from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class modal extends Component {

    //solo se renderiza cuando el boton ORDER NOW
    //se activa y cambia el estado de la propiedad show

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.closeModal} />
                <div className={mStyles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100)',
                        opacity: this.props.show ? '1' : '0',
                        display: this.props.show ? 'block' : 'none'
                    }}>
                    {this.props.children}
                </div>
            </Aux >
        )
    };
};

export default modal;