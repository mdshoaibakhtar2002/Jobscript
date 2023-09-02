/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  const goto = (link) => window.open(link, "_blank");
  return (
    <Card className='cards' style={{ width: '20rem', height:'32rem', margin:'2rem 1rem'}}>
      <Card.Img variant="top" src={props.image} className={props.class}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="dark" className='width' onClick={() => goto(props.link)}>View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;