import React from 'react';
import nStyle from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className={nStyle.navigationItems}>
            <li className={nStyle.navigationItem}>
                <a
                    href="/"
                    className={props.active ? nStyle.active : null}
                >Burger builder
                </a>
                <a
                    href="/"
                    className={props.active ? nStyle.active : null}
                >Checkout
                </a>
            </li>
        </ul>
    );
};

export default navigationItems;