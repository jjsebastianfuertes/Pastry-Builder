import React from 'react';
import bcStyles from './BuildControl.module.css';

const buildControl = props => {
  return (
    <div className={bcStyles.BuildControl}>
      <div className={bcStyles.Label}>{props.label}</div>
      <button
        className={bcStyles.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >Less</button>
      <button
        className={bcStyles.More}
        onClick={props.added}
      >More</button>
    </div>
  );
};

export default buildControl;
