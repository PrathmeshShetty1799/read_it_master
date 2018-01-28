import React from 'react'
import { Image,Segment, Item } from 'semantic-ui-react'
import RatingExampleRating from '../star/star.js' 
import mockingb from '../images/mockingb.jpg'
import gatsby from '../images/gatsby.jpg'
import dalloway from '../images/dalloway.jpg'
import lawyer from '../images/lawyer.jpg'
import catch22 from '../images/catch22.jpg'
import frankenstein from '../images/frankenstein.jpg'
import warpeace from '../images/war-peace.jpg'

const ItemExampleItems = () => (
  <Item.Group>
    <Item>
      <Item.Image size='small' src= {warpeace} />     
      
      <Item.Content>
      <div class="ui right floated segment">
      <p><RatingExampleRating> </RatingExampleRating>
      </p></div>
      <Item.Header as='a'>War and Peace</Item.Header>      
      <Item.Meta>Level: Difficult </Item.Meta>           
      <Item.Description>
        Author: Leo Tolstoy
        </Item.Description>
        <Item.Extra>War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men</Item.Extra>
      </Item.Content>
    </Item>
    
    <Item>
      <Item.Image size='small' src={mockingb} />

      <Item.Content>
      <div class="ui right floated segment">
      <p><RatingExampleRating> </RatingExampleRating>
      </p></div>
        <Item.Header as='b'>To Kill a Mockingbird</Item.Header>
        <Item.Meta>Level: Difficult</Item.Meta>
        <Item.Description>
        Author: Harper Lee
        </Item.Description>
        <Item.Extra>The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. Its iconic characters, most notably the sympathetic and just lawyer and father Atticus Finch, served as role models and changed perspectives in the United States at a time when tensions regarding race were high.</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src= {gatsby} />

      <Item.Content>
      <div class="ui right floated segment">
      <p><RatingExampleRating> </RatingExampleRating>
      </p></div>
        <Item.Header as='a'>The Great Gatsby</Item.Header>
        <Item.Meta>Level: Hard </Item.Meta>
        <Item.Description>
        Author: F. Scott Fitzgerald
        </Item.Description>
        <Item.Extra>The novel is told from the perspective of a young man named Nick Carraway who has recently moved to New York City and is befriended by his eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby. The Great Gatsby provides an insider’s look into the Jazz Age of the 1920s in United States history while at the same time critiquing the idea of the “American Dream.”</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src= {dalloway} />

      <Item.Content>
      <div class="ui right floated segment">
      <p><RatingExampleRating> </RatingExampleRating>
      </p></div>
        <Item.Header as='a'>Mrs. Dalloway</Item.Header>
        <Item.Meta>Level: Difficult </Item.Meta>
        <Item.Description>
        Author: Virginia Woolf
        </Item.Description>
        <Item.Extra>Possibly the most idiosyncratic novel of this list, Virginia Woolf’s Mrs. Dalloway describes exactly one day in the life of a British socialite named Clarissa Dalloway. Using a combination of a third-person narration and the thoughts of various characters, the novel uses a stream-of-consciousness style all the way through.</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src= {lawyer} />

      <Item.Content>
      <div class="ui right floated segment">
      <p><RatingExampleRating> </RatingExampleRating>
      </p></div>
        <Item.Header as='a'>The Street Lawyer</Item.Header>
        <Item.Meta>Level: Hard </Item.Meta>
        <Item.Description>
        Author: John Grisham
        </Item.Description>
        <Item.Extra>It is a treat for suspense lovers. “Michael is a successful lawyer when a homeless man attacks him. As Michal tries to discover who the man was, he uncovers a dangerous secret about the company he works for.”</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src= {catch22} />

      <Item.Content>
      <div class="ui right floated segment">
      <p><RatingExampleRating> </RatingExampleRating>
      </p></div>
        <Item.Header as='a'>Catch 22</Item.Header>
        <Item.Meta>Level: Difficult </Item.Meta>
        <Item.Description>
        Author: Joseph Heller
        </Item.Description>
        <Item.Extra>Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src= {frankenstein} />

      <Item.Content>
      <div class="ui right floated segment">
      <p><RatingExampleRating> </RatingExampleRating>
      </p></div>
        <Item.Header as='a'>Frankenstein</Item.Header>
        <Item.Meta>Level: Difficult </Item.Meta>
       <Item.Description>
        Author: Mary Shelley
        </Item.Description>
        <Item.Extra>Frankenstein is the first science fiction meets horror story but as per me, works less on the horror scale and more on the importance of tolerance. If only Victor had managed to look past his creation’s ghastly appearance, he would have avoided this great mess that the got himself into.</Item.Extra>
      </Item.Content>
    </Item>

    
  </Item.Group>
)

export default ItemExampleItems