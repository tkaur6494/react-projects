import Container from 'react-bootstrap/Container'
import Calculator from './Components/Calculator'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Container fluid>
        <Calculator />
      </Container>

    </div>
  );
}

export default App;
