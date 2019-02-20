import React, { Component } from 'react';
import { Parallax } from "react-parallax";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class HeaderContent extends Component {
  state = {
    image: 'https://t-ec.bstatic.com/images/hotel/max1024x768/120/120879493.jpg',
  };
  
  render(){
    return (
      <div style={styles.root}>
        <Parallax bgImage={this.state.image} strength={500} style={{height: '70vh', width: '100%'}}>
          <div style={{ height: 500 }}>
          </div>
        </Parallax>
      </div>
    )
  }
}

export default HeaderContent;