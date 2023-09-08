// src/components/Room.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { roomData } from '../RoomList/RoomList';
import './Room.css';

function Room() {
  const navigate = useNavigate();

  const navigateToRoomDetail = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  const navigateToReservation = (roomId) => {
    navigate(`/room/${roomId}/book`);
  };

  return (
    <Container>
      <h1 className="mt-5 mb-4">Available Rooms</h1>
      <Row>
        {roomData.map((room) => (
          <Col key={room.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={room.image} />
              <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigateToRoomDetail(room.id)}
                >
                  View Details
                </Button>
                <Button
                  variant="success"
                  className="ml-2"
                  onClick={() => navigateToReservation(room.id)}
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Room;
