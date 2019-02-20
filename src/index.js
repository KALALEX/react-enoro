import React,{ Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import { render } from 'react-dom';
import './style.css';
import ToolBar from './components/ToolBar';
import RoomCards from './components/RoomCards';
import HeaderContent from './components/HeaderContent';
import SecondaryMenu from './components/SecondaryMenu';


import Slide from '@material-ui/core/Slide';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Enoro',
      rooms: [3,4,5,6,7],
    };
  }

  render() {

    return (
      <React.Fragment>
        
        <Router>
        
          <Suspense fallback={<div>Loading...</div>}>
            <ToolBar/>
            <Switch>
              <Route exact path="/" 
                component={() => (
                  <Slide direction="left" in={true}>
                  <React.Fragment>
                    <HeaderContent/>
                    <SecondaryMenu/>
                    <RoomCards rooms={this.state.rooms}/>
                  </React.Fragment></Slide>
                  )
                }
              />
              
              <Route path="/rooms" component={()=>(
                <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                <SecondaryMenu/>
                </Slide>
              )}/>
            </Switch>

          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));


            // <HeaderContent/>
            // <SecondaryMenu/>
            // <RoomCards rooms={this.state.rooms}/>