import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

const array = () => {
  const carros = ["Celta", "Savero", "Gol", "Civic", "Fit", "Palio"];
  return (
    <>
      <Pagina titulo="Arrays">
        <Container>
          <h1>Lista ordenada</h1>
          <br></br>
          {carros.map((item, index) => (
            <p>
              {index + 1} - {item}
            </p>
          ))}
        </Container>
      </Pagina>
    </>
  );
};

export default array;
