import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

import routes from "../../helpers/routes";

const menu = () => {

  return (
    <>
       <div className="cajaMenus">
       <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1" link href={routes.home}>
            <Navbar.Brand  className="TituloNombre">
              Star Wars
            </Navbar.Brand>
          </Nav.Link>
        </Nav.Item>
      </Nav>
       </div>
      
      
    </>
  );
};

export default menu;
