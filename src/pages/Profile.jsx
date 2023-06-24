import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import Image from "react-bootstrap/Image";

import profileImage from '../assets/profileimage.jpg';

function Profile() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center mt-2 mb-4"><h1>Profile Page</h1></Card.Title>
                        <CardGroup>
                            <Card style={{ height: '80vh', width: '50vh' }}>
                                <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="text-center mt-2 mb-4">
                                    <Image src={profileImage} roundedCircle style={{ width: '200px', height: '200px' }} />
                                </Card.Body>
                            </Card>
                            <Card style={{ height: '80vh', width: '50vh' }}>
                                <Card.Title className="ms-3 mt-2"><h4>Personal Information</h4></Card.Title>
                                <Card.Body>
                                    <div className='mb-4 mt-2'>
                                        <Card.Text><b>Name:</b></Card.Text>
                                        <div className='d-grid gap-3'>
                                            <Card.Subtitle>Ariff</Card.Subtitle>
                                        </div>
                                    </div>
                                    <div className='mb-4 mt-2'>
                                        <Card.Text><b>Email:</b></Card.Text>
                                        <div className='d-grid gap-3'>
                                            <Card.Subtitle>ariffazlan16@gmail.com</Card.Subtitle>
                                        </div>
                                    </div>
                                    <div className='mb-4 mt-2'>
                                        <Card.Text><b>Phone Number:</b></Card.Text>
                                        <div className='d-grid gap-3'>
                                            <Card.Subtitle>+6018 222 9791</Card.Subtitle>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card style={{ height: '80vh', width: '50vh' }}>
                                <Card.Title className="ms-3 mt-2"><h4>Skills</h4></Card.Title>
                                <Card.Body>
                                    <div className='mb-4 mt-2'>
                                        <Card.Text><b>Soft skills</b></Card.Text>
                                        <div className='d-grid gap-3'>
                                            <Card.Subtitle>1. Team building</Card.Subtitle>
                                            <Card.Subtitle>2. Fluent speaker</Card.Subtitle>
                                            <Card.Subtitle>3. Event management</Card.Subtitle>
                                        </div>
                                    </div>
                                    <div className='mb-4 mt-2'>
                                        <Card.Text><b>Technical skills</b></Card.Text>
                                        <div className='d-grid gap-3'>
                                            <Card.Subtitle>1. Laravel</Card.Subtitle>
                                            <Card.Subtitle>2. React</Card.Subtitle>
                                            <Card.Subtitle>3. Flutter</Card.Subtitle>
                                        </div>
                                    </div>
                                    <div className='mb-4 mt-2'>
                                        <Card.Text><b>Projects</b></Card.Text>
                                        <div className='d-grid gap-3'>
                                            <Card.Subtitle>1. Management system</Card.Subtitle>
                                            <Card.Subtitle>2. Feedback app</Card.Subtitle>
                                            <Card.Subtitle>3. To-do list</Card.Subtitle>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Profile;
