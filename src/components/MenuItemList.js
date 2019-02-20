import React, {Component} from 'react'
import MenuItem from '@material-ui/core/MenuItem';

class MenuItemList extends Component {
  render(){
    
    return this.props.data.items.map( item => {
      return (
        <MenuItem key={item.key} onClick={this.props.handleClick}>{item.name}</MenuItem>
      )
    });
  }
}
export default MenuItemList;