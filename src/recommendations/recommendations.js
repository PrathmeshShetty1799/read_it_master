import React from 'react'
import { Image,Segment, Item } from 'semantic-ui-react'
import RatingExampleRating from '../star/star.js' 
import mockingb from '../images/mockingb.jpg'
import gatsby from '../images/gatsby.jpg'
import dalloway from '../images/dalloway.jpg'
const ItemExampleItems = () => (
  <Item.Group>
    <Item>
      <Item.Image size='small' src={mockingb} />

      <Item.Content>
        <Item.Header as='b'>To Kill a Mockingbird</Item.Header>
        <Item.Meta>Level: Difficult</Item.Meta>
        <Segment> <RatingExampleRating> </RatingExampleRating> </Segment>
        <Item.Description>
          
        </Item.Description>
        <Item.Extra>The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. Its iconic characters, most notably the sympathetic and just lawyer and father Atticus Finch, served as role models and changed perspectives in the United States at a time when tensions regarding race were high.</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src= {gatsby} />

      <Item.Content>
        <Item.Header as='a'>The Great Gatsby</Item.Header>
        <Item.Meta>Level: Hard </Item.Meta>
        <Segment> <RatingExampleRating> </RatingExampleRating> </Segment>
        <Item.Description>
          
        </Item.Description>
        <Item.Extra>The novel is told from the perspective of a young man named Nick Carraway who has recently moved to New York City and is befriended by his eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby. The Great Gatsby provides an insider’s look into the Jazz Age of the 1920s in United States history while at the same time critiquing the idea of the “American Dream.”</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src= {dalloway} />

      <Item.Content>
        <Item.Header as='a'>Mrs. Dalloway</Item.Header>
        <Item.Meta>Level: Difficult </Item.Meta>
        <Segment> <RatingExampleRating> </RatingExampleRating> </Segment>
        <Item.Description>
          
        </Item.Description>
        <Item.Extra>Possibly the most idiosyncratic novel of this list, Virginia Woolf’s Mrs. Dalloway describes exactly one day in the life of a British socialite named Clarissa Dalloway. Using a combination of a third-person narration and the thoughts of various characters, the novel uses a stream-of-consciousness style all the way through.</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleItems