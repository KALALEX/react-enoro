import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import Explore from '@material-ui/icons/Explore';
import Place from '@material-ui/icons/Place';
import Terrain from '@material-ui/icons/Terrain';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
};

class SecondaryMenu extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper square styles={styles.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<Place/>} label={<Hidden xsDown>ΤΟΠΟΘΕΣΙΑ</Hidden>}/>
          <Tab icon={<Explore/>} label={<Hidden xsDown>ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ</Hidden>}/>
          <Tab icon={<Terrain/>} label={<Hidden xsDown>ΑΞΙΟΘΕΑΤΑ</Hidden>}/>
        </Tabs>
        { this.state.value === 0 && <Typography>LORPE</Typography> }
      </Paper>
    );
  }
}

export default SecondaryMenu;