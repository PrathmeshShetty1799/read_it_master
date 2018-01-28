import React, { Component } from 'react';
import logo from './logo.svg';
import SidebarLeftOverlay from './Sidebar/sidebar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidebarLeftOverlay>
        </SidebarLeftOverlay>

      </div>
    );
  }
}

export default App;
