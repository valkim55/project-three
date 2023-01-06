import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyFaves = () => {
  return (
    <Card >
        <Card.Img alt='product bottle' />
        <Card.Body>
            <Card.Title>product title</Card.Title>
            <Card.Text>description</Card.Text>
            <Card.Text>price</Card.Text>
            <Button>unfave</Button>
        </Card.Body>
    </Card>
  )
}

export default MyFaves