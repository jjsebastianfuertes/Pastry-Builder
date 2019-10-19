import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import lStyle from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true })
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  render() {
    return (
      <Aux>
        <Toolbar openMenu={this.sideDrawerOpenHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={lStyle.margin}>{this.props.children}</main>
      </Aux >
    );
  };
};

export default Layout;
