import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Card className="home-card-center">
                <Card.Body>
                    <Card.Title>Product List</Card.Title>
                    <Card.Text>This is product List application with pagination</Card.Text>
                    <Button
                        variant="primary"
                        style={{ float: 'inline-end' }}
                        onClick={() => {
                            navigate('/products');
                        }}
                    >
                        Product List
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Home;
