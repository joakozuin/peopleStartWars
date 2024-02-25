import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const cardPeople = (props) => {
  const people = props.people;

  return (
    <>
            <Card className="BordeCart">
            <Card.Img variant="top" src={people.imgUrl} style={{"margin-top": "10px"}} />
              <Card.Body>
                <Card.Header className="TitleName">{people.name}</Card.Header>

                <ListGroup variant="flush" className="ListGroup">
              
                  <ListGroup.Item>
                    <Card.Title className="Title"> <strong>Altura:</strong> {people.height} </Card.Title>
                    
                  </ListGroup.Item>
                 
                  <ListGroup.Item >
                    <Card.Title className="Title"><strong>Peso:</strong>  {people.mass} </Card.Title>
                    
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Card.Title className="Title"><strong>Color de pelo:</strong>  {people.hair_color} </Card.Title>
                    
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Card.Title className="Title"><strong>Color de piel:</strong>  {people.skin_color}</Card.Title>
                    
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Card.Title className="Title"><strong>Color de ojos:</strong>  {people.eye_color}</Card.Title>
                    
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Card.Title className="Title"><strong>Año de nacimiento:</strong>  {people.birth_year}</Card.Title>
                    
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Card.Title className="Title"><strong>Genero:</strong>  {people.gender} </Card.Title>
                    
                  </ListGroup.Item>
                </ListGroup>

              </Card.Body>
            </Card>
       
    
    </>
  );
};

export default cardPeople;
