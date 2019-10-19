import React from 'react'
import bStyles from './Backdrop.module.css';


const backdrop = (props) => (
    props.show ? <div className={bStyles.Backdrop} onClick={props.clicked}> </div> : null
);

export default backdrop