import "./Login.css";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-toastify/dist/ReactToastify.min.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';

import React, { useState } from "react";
import {
    Card,
    Col,
    Container,
    Form,
    Alert,
    Button,
    Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../API/Api";

function Registration() {
    const navigate = useNavigate();

    const [regMessage, setRegMessage] = useState("");
    const [user, setUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfm: "",
    });

    const checkEmptyFields = () => {
        return user.email !== "" ||
            user.firstName !== "" ||
            user.lastName !== "" ||
            user.email !== "" ||
            user.password !== "" ||
            user.passwordConfm !== ""
            ? true
            : false;
    };

    const handleRegistration = () => {

        setRegMessage("");
        if (!checkEmptyFields()) return setRegMessage("Fill all fields");
        let text =
            user.password === user.passwordConfm
                ? ""
                : "Check your confirmation password";
        setRegMessage(text);
        if (regMessage !== "") return;
        
        let sendData = {
            firstName: user.firstName,
            lastName : user.lastName,
            username : user.username,
            email: user.email,
            password: user.password,
            passwordConfm: user.passwordConfm
        }

        api('/api/users/register', sendData, 'post').then((res) => {
            console.log(res)
            if (res.status === "ok") 
            {
                setRegMessage('');
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                  });
                setTimeout(() => {
                    navigate("/");
                  }, 2000);
            }
             else
                setRegMessage(res.data);
        })
    };

    return (
        <div className="Login">
            <ToastContainer />
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <FontAwesomeIcon icon={faUserPlus} /> 
                                User registration:
                            </Card.Title>
                            <Form>
                                <Row>
                                    <Col md="6">
                                        <Form.Group>
                                            <Form.Label htmlFor="surname">
                                                Firstname:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="surname"
                                                value={user.firstName}
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        firstName:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group>
                                            <Form.Label htmlFor="forename">
                                                Lastname:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="forename"
                                                value={user.lastName}
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        lastName:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <Form.Group>
                                            <Form.Label htmlFor="email">
                                                E-mail:
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                value={user.email}
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group>
                                            <Form.Label htmlFor="username">
                                                Username:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="username"
                                                value={user.username}
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        username:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    <Form.Label htmlFor="password">
                                        Password:
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="password"
                                        value={user.password}
                                        onChange={(e) => {
                                            setUser({
                                                ...user,
                                                password: e.target.value,
                                            });
                                        }}
                                    />
                                    <Form.Label htmlFor="password">
                                        Password Conformation:
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="password"
                                        value={user.passwordConfm}
                                        onChange={(e) => {
                                            setUser({
                                                ...user,
                                                passwordConfm: e.target.value,
                                            });
                                        }}
                                    />
                                </Form.Group>

                                <br />
                                <p
                                    style={{
                                        display: "flex",
                                        justifyContent: "end",
                                    }}>
                                    <i>b_social.com</i>
                                </p>
                                <hr />
                                <Form.Group>
                                    <Button
                                        variant="primary"
                                        style={{ marginRight: "20px" }}
                                        onClick={handleRegistration}>
                                        Register
                                    </Button>
                                    <Button
                                        variant="success"
                                        onClick={() => navigate("/")}>
                                        Sign In
                                    </Button>
                                </Form.Group>
                            </Form>
                            <Alert
                                style={{ marginTop: "15px" }}
                                variant="danger"
                                className={regMessage !== "" ? "" : "d-none"}>
                                {regMessage}
                            </Alert>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
}

export default Registration;
