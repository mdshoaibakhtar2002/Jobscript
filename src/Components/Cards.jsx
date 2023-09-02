import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCards() {
  return (
    <Card>
      <Card.Img variant="top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>            
  );
}

export default MyCards;