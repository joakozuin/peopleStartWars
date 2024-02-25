import React, { useContext,useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';

import CardPeople from './cardPeople'

import GlobalContext from "../../context/globalContext";
import { Row } from "react-bootstrap";


const Peoples = () => {

  /* Funcion de global context */

  const globalState = useContext(GlobalContext)

  const { peoples}= globalState

  /*  */


  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(false)
  }, []);

  if (loading)
    return (
      <div className="row">
        <div className="col-md-12 my-auto">
        <Button variant="primary" className="spinner-grow text-primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          className="sr-only"
        />
        Loading...
      </Button>
        </div>
      </div>
    );

  if (peoples.length === 0) return <div>No hay personajes para mostrar</div>;

  return (
    <div className="row">
      <h1>
        <Badge bg="dark" className="texto">Personajes de Start Wart</Badge>
      </h1>
      {peoples.length > 0 ? (
        peoples.map((people, index) => {
          return (
            <CardPeople
              people={people}
             
              key={index}
              
            />
          );
        })
      ) : (
        <Row style={{ "justify-content": "center","width":"400px" }}>
            <Alert   variant="danger">
              <h4>Esperando respuesta de la Api(https://swapi.dev/) </h4>
            </Alert>
            </Row>
      )}
    </div>
  );
};

export default Peoples;
