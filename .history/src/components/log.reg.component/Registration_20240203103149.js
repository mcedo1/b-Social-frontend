import './Login.css'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Card, Col, Container, Form, Alert, Button, Row} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function Registration() {
    
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleRegistration = () => {
        console.log(user)
    } 
    const [alerts, setAlerts] = useState({
        message: '',
        color: null 
        })
    const handlePassConf = (confPassword) => {
        if (user.password === confPassword)

    }

    return (
    
        <div className='Login'>
        
            <Container>                
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                    <FontAwesomeIcon icon={faUserPlus} /> User registration:
                            </Card.Title>
                            <Form>
                                <Row>
                                    <Col md="6">
                                        <Form.Group>
                                            <Form.Label htmlFor="surname">Firstname:</Form.Label>
                                            <Form.Control type='text' id="surname" value={user.firstName} onChange={e=> setUser({...user, firstName:e.target.value})}/>
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group>
                                            <Form.Label htmlFor="forename">Lastname:</Form.Label>
                                            <Form.Control type='text' id="forename" value={user.lastName} onChange={e=> setUser({...user, lastName:e.target.value})} />
                                        </Form.Group>  
                                    </Col>                         
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <Form.Group>
                                                <Form.Label htmlFor="email">E-mail:</Form.Label>
                                                <Form.Control type='email' id="email" value={user.email} onChange={e=> setUser({...user, email:e.target.value})} />
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group>
                                            <Form.Label htmlFor="username">Username:</Form.Label>
                                            <Form.Control type='text' id="username" value={user.username} onChange={e=> setUser({...user, username: e.target.value})} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    <Form.Label htmlFor="password">Password:</Form.Label>
                                    <Form.Control type='password' id="password" value={user.password} onChange={e=> setUser({...user, password:e.target.value})}/>
                                    <Form.Label htmlFor="password">Password Conformation:</Form.Label>
                                    <Form.Control type='password' id="password" value={user.password} style={{borderColor:undefined}} onChange={handlePassConf(e.target.value)}/>
                                </Form.Group>

                                <br />
                                <p style={{display:'flex',justifyContent:'end'}}><i>b_social.com</i></p>
                                <hr/>
                                <Form.Group>
                                    <Button variant='primary' style={{ marginRight: '20px' }}
                                        onClick={handleRegistration} 
                                    >
                                        Register
                                    </Button>
                                    <Button variant='success' onClick={()=>navigate("/")} >
                                        Sign In
                                    </Button>
                                </Form.Group>
                            </Form>
                            <Alert style={{marginTop:'15px'}} variant='danger' className={false ? '' : 'd-none'}>Greska</Alert>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
  )
}

export default Registration