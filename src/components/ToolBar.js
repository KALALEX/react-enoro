import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';


import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'


import InfoCardModule from './modules/InfoCardModule';
import DrawerModule from './modules/DrawerModule';
import ToolBarButtons from './ToolBarButtons';
import SimpleMenu from './SimpleMenu';
import MenuItemList from './MenuItemList';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  actionButtons: {
    textTransform: 'none',
  },
  appBar: {
    backgroundColor: 'red',
  }
};

class ToolBar extends Component {
  state = {
    open: false,
    selected: 1,
    right: false,
    anchorEl: null,
    image: 'https://t-ec.bstatic.com/images/hotel/max1024x768/120/120879493.jpg',
    buttons: [ // 34567
      {key: 0, name: 'Αρχική', path: '/'},
      {key: 1, name: 'Δωμάτια', open: false, path: '/rooms', items: [
        {key: 13, name: 'Δωμάτιο 3'},
        {key: 14, name: 'Δωμάτιο 4'},
        {key: 15, name: 'Δωμάτιο 5'},
        {key: 16, name: 'Δωμάτιο 6'},
        {key: 17, name: 'Δωμάτιο 7'},
      ]},
      {key: 2, name: 'Περιήγηση', open: false, path: '/places', items: [
        {key: 20, name: 'Τοποθεσία'},
        {key: 21, name: 'Δραστηριότητες'},
        {key: 22, name: 'Αξιοθέατα'},
      ]},
      {key: 3, name: 'Επικοινωνία', path: '/contact'},
    ],
  };

  handleClick = e => {
    // console.log(this.state.buttons.filter(button => button.key === this.state.selected));
    this.setState({ anchorEl: e.currentTarget });
  };
  
  handleClose = e => {
    this.setState({ anchorEl: null });
  };
  
  setSelected = (id,e) => {
    this.setState({selected: id});
    this.setState({ anchorEl: e.currentTarget });
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  
  // handleChange = (e) => {
  //     this.setState(prevState => ({
  //         items: {
  //             ...prevState.items,
  //             [item.role]: e.target.value
  //         },
  //     }));
  // };

  handleDrawerClick = key => () => {
    // let button = this.state.buttons.find(button => (button.key === key));
    console.log('handleDrawerClick(',key,')');
    // this.setState(prevState => {
    //   prevState.buttons.map(button => {
    //     if(button.key === key){
    //       button.open = !button.open;
    //     }
    //     return button;
    //   });
    // });
    console.log(this.state.buttons[key]);
  };
  
  render(){
    const { anchorEl } = this.state;
    return (
      <AppBar position="sticky" style={{backgroundColor: '#6F372D'}} variant="fullWidth">
        <Toolbar variant="dense" >

          <Typography variant="h4" color="inherit" style={styles.grow}>
            Enoro
          </Typography>
          
          <Hidden xsDown>
            <ToolBarButtons setSelected={this.setSelected} buttons={this.state.buttons}/>
          </Hidden>
          <Hidden smUp>
            <IconButton color="inherit" onClick={this.toggleDrawer('right', true)}>
              <MenuIcon/>
            </IconButton>
          </Hidden>
          { this.state.buttons.find(button => button.key === this.state.selected).items ? 
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItemList 
              data={this.state.buttons.find(button => button.key === this.state.selected)} 
              handleClick={this.handleClose}
            />
          </Menu>
          :null
          }
        </Toolbar>

        <SwipeableDrawer
          variant="persistent"
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={1}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <DrawerModule buttons={this.state.buttons} handleDrawerClick={this.handleDrawerClick}/>
          </div>
        </SwipeableDrawer>
      </AppBar>
    )
  }
}


export default ToolBar;

//            <ListItemIcon>{name % 2 === 0 ? <InboxIcon /> : <Menu />}</ListItemIcon>


// {sideList(this.state.buttons, this.handleDrawerClick)}

  // const sideList = (buttons, handler) => (
  //   <div>
  //     <List>
  //       {buttons.map(button => (
  //         <React.Fragment>
  //           <ListItem button key={button.key} onClick={handler(button.key)}>
  //             <ListItemText primary={button.name} />
  //           </ListItem>
  //           <Collapse in={button.open} timeout="auto">
  //             <List component="div" disablePadding>
  //               { button.items !== undefined ?
  //                 button.items.map( item => (
  //                 <ListItem button key={item.key}>
  //                   <ListItemText inset primary={item.name}/>
  //                 </ListItem>
  //               )): null}
  //             </List>
  //           </Collapse>
  //         </React.Fragment>
  //       ))}
  //     </List>
  //   </div>
  // );