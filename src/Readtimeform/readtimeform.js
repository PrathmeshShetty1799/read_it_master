import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

class FormExampleField extends Component {
  state = {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ name: '' })

  render() {
    const { name} = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
        <div class="ui center aligned segment">
        <Form.Input fluid label= 'How much time would you like to spend reading? (in hours)' placeholder='Time' name='name' value={name} onChange={this.handleChange} />
          <Form.Button content='Submit' />
</div>
          
        </Form.Group>
      </Form>
    )
  }
}

export default FormExampleField