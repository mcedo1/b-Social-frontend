import React, { useState } from "react";
import "../log.reg.component/Login.css";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Card, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api, { saveId, saveIdentity, saveToken } from "../../API/Api";
import 'react-toastify/dist/ReactToastify.min.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        identity: "",
        password: "",
    });
    const [logginMessage, setLogginMessage] = useState("");
    const handleLogin = () => {
        setLogginMessage("");
        let loginData = {
            identity: user.identity,
            password: user.password,
        };
        api("/api/users/login", loginData, "post")
            .then((res) => {
                if (res.status === "ok") {
                    saveIdentity(res.data.email);
                    saveToken(res.data.key);
                    saveId(res.data.userId)
                    toast.success("Wellcome", {
                        position: 'top-right',
                        autoClose: 1200,
                        theme: "colored",
                        transition: Bounce,
                        progress: undefined
                    })
                    setTimeout(() => {
                        navigate("/main", res.data.userId);
                      }, 1700);
                } else setLogginMessage(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="Login">
            <ToastContainer />
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <FontAwesomeIcon icon={faSignInAlt} /> User
                                login
                            </Card.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label htmlFor="email">
                                        Username(E-mail):
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        value={user.identity}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                identity: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="password">
                                        Password:
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="password"
                                        value={user.password}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Button
                                        variant="primary"
                                        style={{
                                            marginRight: "20px",
                                        }}
                                        onClick={handleLogin}>
                                        Sign In
                                    </Button>
                                    <Button
                                        variant="success"
                                        onClick={() => navigate("/reg")}>
                                        Sign Up
                                    </Button>
                                </Form.Group>
                            </Form>
                            <Alert
                                style={{ marginTop: "15px" }}
                                variant="danger"
                                className={
                                    logginMessage !== "" ? "" : "d-none"
                                }>
                                {logginMessage}
                            </Alert>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
}

export default Login;
