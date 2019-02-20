import React, {Component} from 'react'
// Drawer
import List  from '@material-ui/core/List ';
import ListItem  from '@material-ui/core/ListItem ';
import ListItemIcon  from '@material-ui/core/ListItemIcon';
import Divider  from '@material-ui/core/Divider'
import ListItemText   from '@material-ui/core/ListItemText'
import InboxIcon  from '@material-ui/icons/Inbox';
import MenuIcon   from '@material-ui/icons/Menu';
import Collapse  from '@material-ui/core/Collapse';


class DrawerModule extends Component {
  render(){
    return (sideList(this.props.buttons, this.props.handleDrawerClick))
  }
}

  const sideList = (buttons, handler) => (
    <div>
      <List>
        {buttons.map(button => (
          <ListItem button key={button.key} onClick={handler(button.key)}>
            <ListItemText primary={button.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
export default DrawerModule;

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

  // <Collapse in={button.open} timeout="auto">
  //             <List component="div" disablePadding>
  //               { button.items !== undefined ?
  //                 button.items.map( item => (
  //                 <ListItem button key={item.key}>
  //                   <ListItemText inset primary={item.name}/>
  //                 </ListItem>
  //               )): null}
  //             </List>
  //           </Collapse>