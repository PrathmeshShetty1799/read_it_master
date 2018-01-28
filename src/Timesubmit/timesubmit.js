import React, { Component } from 'react'

import { Button, Grid, Segment } from 'semantic-ui-react'
import FormExampleField from '../Readtimeform/readtimeform.js'

export default class Submitbutton extends Component {
  constructor() {
    super();
    this.state = {clicked: false, inputPanel: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({clicked: true,inputPanel: <Submitbutton></Submitbutton>});
  }

  render() {
    return (
      <div>
          {this.state.inputPanel}
          { !this.state.clicked ? 
          <Button
            attached='bottom'
            content='Submit'
            onClick={this.handleClick}>
          </Button> : null
          }
          </div>
    )
  }
}