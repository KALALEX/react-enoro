import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  textTransform: 'none',
};

class ToolBarButtons extends Component {
  render(){
    return this.props.buttons.map( button => (
      <Button 
        onClick={this.props.setSelected.bind(this, button.key)}
        key={button.key}
        style={styles}
        color="inherit"
        aria-label="Add"
        component={Link} to={button.path}
      >
        {button.name}
      </Button>
    ));
  }
}

export default ToolBarButtons;