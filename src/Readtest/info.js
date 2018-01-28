import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleIcon = () => (
  <List>
    <div class="ui horizontal segments">
  <div class="ui segment">
    <p>
    <List.Item>
      <List.Icon name='users' color='orange'/>
      <List.Content>read-it!</List.Content>
    </List.Item>
    </p>
  </div>
  <div class="ui segment">
    <p>
    <List.Item>
      <List.Icon name='marker' color='orange'/>
      <List.Content>Hamilton, ON</List.Content>
    </List.Item>
    </p>
  </div>
  <div class="ui segment">
    <p>
    <List.Item>
      <List.Icon name='mail' color='orange' />
      <List.Content>
        <a href='mailto:jack@semantic-ui.com'>readmore@read-it.com</a>
      </List.Content>
    </List.Item>
    </p>
  </div>
  <div class="ui segment">
    <p>
    <List.Item>
      <List.Icon name='linkify' color='orange'/>
      <List.Content>
        <a href='http://www.semantic-ui.com'>read-it.com</a>
      </List.Content>
    </List.Item>
    </p>
  </div>
</div>     
  </List>
)

export default ListExampleIcon