import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import pachinko from '../images/pachinko.jpg'
import unburied from '../images/sing_unburied_sing.jpg'
import grant from '../images/grant.jpg'
import exit_west from '../images/exit_west.jpg'


const CardExampleCard = () => (
<Card.Group itemsPerRow={4}>
  <Card>
    <Card.Content>
    <Image size='small' src={unburied} />
    <div class="ui hidden divider"></div>
    <Card.Header>Sing, Unburied, Sing</Card.Header>
      <Card.Meta>
        <span className='date'>
          by Jesmyn Ward
        </span>
      </Card.Meta>
      <Card.Description>
      Sing, Unburied, Sing begins as it mostly means to go on: in blackness. A teenager named Jojo finds himself in a place of dirt and mud and slime and blood
      </Card.Description>
    </Card.Content>
  </Card>

  <Card>
    <Card.Content>
    <Image size='small' src={pachinko} />
    <div class="ui hidden divider"></div>
      <Card.Header>
        Pachinko
      </Card.Header>
      <Card.Meta>
        <span className='date'>
        by Min Jin Lee
        </span>
      </Card.Meta>
      <Card.Description>
         A vivid, immersive multigenerational saga about life for Koreans in Japan is a tale of resilience and poignant emotional conflict
      </Card.Description>
    </Card.Content>
  </Card>

  <Card>
    <Card.Content>
    <Image size='small' src={grant} />
    <div class="ui hidden divider"></div>
      <Card.Header>
         Grant
      </Card.Header>
      <Card.Meta>
        <span className='date'>
        by Ron Chernow
        </span>
      </Card.Meta>
      <Card.Description>
      Following the assassination of Abraham Lincoln, Grant became the face of the Republican party, and was twice elected president, serving from 1869 to 1877. His administration was mired in financial scandal, but out of office Grant restored his reputation, 
      </Card.Description>
    </Card.Content>
  </Card>

  <Card>
    <Card.Content>
    <Image size='small' src={exit_west} />
    <div class="ui hidden divider"></div>
      <Card.Header>
        Exit West
      </Card.Header>
      <Card.Meta>
        <span className='date'>
        by Mohsin Hamid
        </span>
      </Card.Meta>
      <Card.Description>
      A couple flee their war-torn city for Europe in a parable of love, displacement and the search for belonging
      </Card.Description>
    </Card.Content>
  </Card>
</Card.Group>
)

export default CardExampleCard