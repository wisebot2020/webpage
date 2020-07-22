import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function Content() {
  return (
    <div>
        <Jumbotron fluid>
            <Container>
                <h1>Dummy Bots</h1>
                <p>
                You can use us to have a demo of how we WORK!!!!!!
                </p>
                <Row>
                    <Col xs={1} />
                    <Col>
                        <Card style={{ width: '18rem', boxShadow: '0 16px 32px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                            <Card.Img variant="top" src="https://content3.jdmagicbox.com/comp/kolhapur/v2/0231px231.x231.200104172405.z5v2/catalogue/bread-bash-kolhapur-f5tc8heazi.jpg" />
                            <Card.Body>
                                <Card.Title>E Commerce Bot</Card.Title>
                                <Card.Text>
                                I help you with ordering food
                                from Breadbash, we will process your order, and redirect you to a payment gateway
                                </Card.Text>
                                <Button variant="primary" href="https://e-commerce.wisebot.ml" target="_blank">Try me!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2} />
                    <Col>
                        <Card style={{ width: '18rem', boxShadow: '0 16px 32px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                            <Card.Img variant="top" src="https://awesome-events.gr/images/home/slider-logo.png" />
                            <Card.Body>
                                <Card.Title>Event Management</Card.Title>
                                <Card.Text>
                                I will help you with the event management  
                                Featured by awesome events.
                                </Card.Text>
                                <Button variant="primary" href="https://event-management.wisebot.ml" target="_blank">Try me!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <hr />
                <br />
                <Row>
                    <Col xs={1} />
                    <Col>
                        <Card style={{ width: '18rem', boxShadow: '0 16px 32px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                            <Card.Img variant="top" src="https://loebig.files.wordpress.com/2018/12/facebook-ads-manager.jpg?w=640" />
                            <Card.Body>
                                <Card.Title>Ad Manager</Card.Title>
                                <Card.Text>
                                I will help you with the Ad management.
                                Post your ads on facebook wisely, save your money.
                                </Card.Text>
                                <Button variant="primary" href="https://ad-manager.wisebot.ml" target="_blank">Try me!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2} />
                    <Col>
                        <Card style={{ width: '18rem', boxShadow: '0 16px 32px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                            <Card.Img variant="top" src="https://cdn3.f-cdn.com/contestentries/875607/19400184/58172cdf85fb4_thumb900.jpg" />
                            <Card.Body>
                                <Card.Title>Real Estate</Card.Title>
                                <Card.Text>
                                Want to buy a new house?
                                Or an Investment perhaps?
                                </Card.Text>
                                <Button variant="primary" href="https://real-estate.wisebot.ml" target="_blank">Try me!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </div>
  );
}

export default Content;
