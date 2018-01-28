import React, { Component } from 'react';
import logo from './logo.svg';
import SidebarLeftOverlay from './Sidebar/sidebar.js';
import './App.css';
import Header from './Header/header.js'


class App extends Component {
  render() {
    return (
      <div className="App">
          <div class="ui hidden divider"></div>
        <Header>
        </Header>
        <SidebarLeftOverlay>
        </SidebarLeftOverlay>
        

      </div>
    );
  }
}

export default App;
