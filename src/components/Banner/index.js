import './style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Banner = () => {
    return (
        <Container fluid="md">
            <header className="banner">
                <Row className="logo">
                    <Col>
                        <img src="/img/logo.png"></img>
                        <Row>
                            <Col>
                                <div>
                                    <h2>WebDex</h2>
                                    <h3>Os pokémons guardados em um só lugar</h3>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img src="img/pokedex.png" alt="pokedex"></img>
                    </Col>
                </Row>
            </header>
        </Container>
    )
} 
export default Banner