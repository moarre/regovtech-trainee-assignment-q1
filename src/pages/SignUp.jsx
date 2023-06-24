import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Image from "react-bootstrap/Image";
import logo from '../assets/logo.png';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = formData;

    const navigate = useNavigate();

    const users = useMemo(() => {
        return JSON.parse(localStorage.getItem('users')) || [];
    }, []);

    useEffect(() => {
        // Save the form data to local storage whenever it changes
        localStorage.setItem('users', JSON.stringify(users));
    }, [formData, users]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            if (name && email && password) {
                const newUser = { name, email, password };
                const updatedUsers = [...users, newUser];
                localStorage.setItem('users', JSON.stringify(updatedUsers));
                navigate('/sign-in');
            } else {
                throw new Error('Invalid registration details');
            }
        } catch (error) {
            toast.error('Something went wrong with registration');
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card className='mx-auto' style={{ width: '30rem', height: '45rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Sign Up</Card.Title>
                        <Card.Text className="text-center">
                            Get started
                        </Card.Text>
                        <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="text-center">
                            <Image src={logo} roundedCircle style={{ width: '200px', height: '200px' }} />
                        </Card.Body>
                    </Card.Body>
                    <br />
                    <div>
                        <Form className="d-grid gap-3 mb-3 p-4" onSubmit={onSubmit}>
                            <Form.Control
                                type="text"
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={onChange}
                            />
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
                                Register
                            </Button>{' '}
                            <Link className="text-center mb-2" to="/sign-in">Already have an account? Sign in</Link>
                        </Form>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default SignUp;
