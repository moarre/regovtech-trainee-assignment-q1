import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Image from "react-bootstrap/Image";
import logo from '../assets/logo.png';

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const matchedUser = users.find((user) => user.email === email && user.password === password);

            if (matchedUser) {
                // Save logged-in user in localStorage
                localStorage.setItem('loggedUser', JSON.stringify(matchedUser));
                navigate('/profile');
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            toast.error('Bad User Credentials');
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card className='mx-auto' style={{ width: '30rem', height: '45rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Sign In</Card.Title>
                        <Card.Text className="text-center">
                            Log into your account
                        </Card.Text>
                        <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="text-center">
                            <Image src={logo} roundedCircle style={{ width: '200px', height: '200px' }} />
                        </Card.Body>
                    </Card.Body>
                    <div>
                        <Form className="d-grid gap-3 mb-3 p-4" onSubmit={onSubmit}>
                            <Form.Control
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={onChange}
                            />
                            <Form.Control
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={onChange}
                            />
                            <br />
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>{' '}
                            <Link className="text-center mb-2" to="/sign-up">Dont have an account? Sign Up</Link>
                        </Form>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default SignIn;
