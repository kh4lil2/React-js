
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Button,Card } from 'react-bootstrap';
import Swal from 'sweetalert2';

function App() {
  onsubmit=()=>{
    Swal.fire('Thank you for require')
  }
  return (
    <div className="App">
      <div className='container'>
      <Card style={{ width: '25rem' }}>
  <Card.Body>
    <Card.Title>Contact Us</Card.Title>

  </Card.Body>
  <Form onSubmit={onsubmit()}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button type='submit' variant="">Submit</Button>
  
</Form>
</Card>

</div>
    </div>
  );
}

export default App;
