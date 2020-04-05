import React from 'react'
import tStyles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={tStyles.Toolbar}>
            <div onClick={props.openMenu} className={tStyles.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div style={{ height: '100%' }}>
                <Logo />
            </div>
            <nav className={tStyles.desktopOnly}>
                <NavigationItems active />
            </nav>
        </header>
    );
};

export default toolbar;