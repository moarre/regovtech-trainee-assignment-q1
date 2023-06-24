import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignIn() {

    function onSubmit() {}
    function onChange() {}

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card className='mx-auto' style={{ width: '30rem', height: '30rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Sign In</Card.Title>
                        <Card.Text className="text-center">
                            Get started
                        </Card.Text>
                    </Card.Body>
                    <br />
                    <div>
                        <Form className="d-grid gap-3 mb-3 p-4" onSubmit={onSubmit}>
                            <Form.Control
                                type="email"
                                id="email"
                                placeholder="Email"
                                
                                onChange={onChange}
                            />
                            <Form.Control
                                type="password"
                                id="password"
                                placeholder="Password"
                                
                                onChange={onChange}
                            />
                            <br />
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>{' '}
                            {/* <Link className="text-center mb-2" to="/sign-in">Already have an account? Sign in</Link> */}
                        </Form>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default SignIn;
