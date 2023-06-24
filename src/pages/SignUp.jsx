import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card className='mx-auto' style={{ width: '30rem', height: '25rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Sign Up</Card.Title>
                        <Card.Text className="text-center">
                            Get started
                        </Card.Text>
                    </Card.Body>
                    <br />
                    <div className="d-grid gap-3 mb-3 p-4">
                        <Form.Control type="text" placeholder="Name" />
                        <Form.Control type="text" placeholder="Email" />
                        <Form.Control type="password" placeholder="Password" />
                        <br />
                        <Button variant="primary">Register</Button>{' '}
                    </div>
                </Card>
            </div>
        </>
    );
}

export default SignUp;
