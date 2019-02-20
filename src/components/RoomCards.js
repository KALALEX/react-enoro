import React, { Component } from 'react';
import InfoCardModule from './modules/InfoCardModule';
import Grid from '@material-ui/core/Grid';

const styles = {
  textTransform: 'none',
};

class RoomCards extends Component {
  render(){
    const { rooms } = this.props;
    return (
      <div style={{paddingTop: 50}}>
        <Grid container justify="center">
          <Grid item>
            <Grid container justify="center">
              {rooms.map(value => (
                <Grid key={value} item style={{padding: 20}}>
                  <InfoCardModule data={value}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default RoomCards;