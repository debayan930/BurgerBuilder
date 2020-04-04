import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    toggleSideDrawerHandler = () => {
        this.setState((prevState, props) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        });
    }
    
    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;