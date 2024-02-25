import React, { useContext,useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import CardPeople from "../listallPeople/cardPeople";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GlobalContext from "../../context/globalContext";

const SearchPeople = () => {

  /* Funcion de global context */

  const globalState = useContext(GlobalContext)

  const { peoples}= globalState

  /*  */

 

  const [searchData, setSearchData] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  /* funcion de buscardor */
  const handleChange = (e) => {
    setSearchData(e.target.value);

  };

  /* funcion del filtrado */

    const results = !searchData
      ? peoples
      : peoples.filter((dato) =>
          dato.name.toLowerCase().includes(searchData.toLowerCase())||
          dato.height.toLowerCase().includes(searchData.toLowerCase())||
          dato.mass.toLowerCase().includes(searchData.toLowerCase())||
          dato.hair_color.toLowerCase().includes(searchData.toLowerCase())||
          dato.skin_color.toLowerCase().includes(searchData.toLowerCase())||
          dato.eye_color.toLowerCase().includes(searchData.toLowerCase()) ||
          dato.birth_year.toLowerCase().includes(searchData.toLowerCase())||
          dato.gender.toLowerCase().includes(searchData.toLowerCase())
        );
    
  useEffect(() => {
    
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buscar tu personaje favorito</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="d-flex" style={{ "justify-content": "center" }}>
            <div className="containerInput">
              <input
                className="form-control inputBuscar"
                type="text"
                value={searchData}
                placeholder="Ingresar el nombre de tu personaje"
                onChange={handleChange}
              />
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Container fluid>
        <Row style={{ "justify-content": "space-evenly" }}>
          <Button onClick={handleShow} className="BotonLink">
            Buscar un Personaje de Star Wars
          </Button>
        </Row>

        <Row
          xl={12}
          md={4}
          sm={1}
          style={{ "justify-content": "space-around" }}
        >
          {peoples.length > 0 ? (
            results.map((people, index) => {
              return <CardPeople people={people} key={index} />;
            })
          ) : (
            <Row style={{ "justify-content": "center","width":"400px" }}>
            <Alert   variant="danger">
              <h4>Esperando respuesta de la Api(https://swapi.dev/) </h4>
            </Alert>
            </Row>
          )}
        </Row>
      </Container>
    </>
  );
};

export default SearchPeople;
