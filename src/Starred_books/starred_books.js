import React from 'react'
import { Image,Segment, Item } from 'semantic-ui-react'
import StarExampleRating from '../star/star-true.js' 
import mockingb from '../images/mockingb.jpg'
import gatsby from '../images/gatsby.jpg'
import dalloway from '../images/dalloway.jpg'
import lawyer from '../images/lawyer.jpg'
import catch22 from '../images/catch22.jpg'
import frankenstein from '../images/frankenstein.jpg'
import warpeace from '../images/war-peace.jpg'

const Sbooks = () => (
    <Item.Group>
      <Item>
        <Item.Image size='small' src= {warpeace} />
  
        <Item.Content>
          <Item.Header as='a'>War and Peace</Item.Header>
          <Item.Meta>Level: Difficult </Item.Meta>
          <Segment> <StarExampleRating> </StarExampleRating> </Segment>
          <Item.Description>
          Author: Leo Tolstoy
          </Item.Description>
          <Item.Extra>War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men</Item.Extra>
        </Item.Content>
      </Item>
      
      <Item>
        <Item.Image size='small' src= {dalloway} />
  
        <Item.Content>
          <Item.Header as='a'>Mrs. Dalloway</Item.Header>
          <Item.Meta>Level: Difficult </Item.Meta>
          <Segment> <StarExampleRating> </StarExampleRating> </Segment>
          <Item.Description>
          Author: Virginia Woolf
          </Item.Description>
          <Item.Extra>Possibly the most idiosyncratic novel of this list, Virginia Woolf’s Mrs. Dalloway describes exactly one day in the life of a British socialite named Clarissa Dalloway. Using a combination of a third-person narration and the thoughts of various characters, the novel uses a stream-of-consciousness style all the way through.</Item.Extra>
        </Item.Content>
      </Item>
  
      
      <Item>
        <Item.Image size='small' src= {catch22} />
  
        <Item.Content>
          <Item.Header as='a'>Catch 22</Item.Header>
          <Item.Meta>Level: Difficult </Item.Meta>
          <Segment> <StarExampleRating> </StarExampleRating> </Segment>
          <Item.Description>
          Author: Joseph Heller
          </Item.Description>
          <Item.Extra>Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. </Item.Extra>
        </Item.Content>
      </Item>
  
      
    </Item.Group>
  )
  export default Sbooks