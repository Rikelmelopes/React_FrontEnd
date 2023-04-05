import React from "react";
import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

const objeto = () => {
  const carros = ["Celta", "Savero", "Gol", "Civic", "Fit", "Palio"];
  const carro = [
    { marca: "honda", modelo: "Civic", ano: "2015", cor: "branco" },
    { marca: "hyundai", modelo: "tucson", ano: "2014", cor: "preto" },
    { marca: "chevrolet", modelo: "celta", ano: "2012", cor: "vermelho" },
    { marca: "fiat", modelo: "tampra", ano: "2011", cor: "azul" },
    { marca: "fiat", modelo: "marea", ano: "2010", cor: "verde" },
    { marca: "fiat", modelo: "doblo", ano: "2015", cor: "amarelo" },
  ];
  return (
    <Pagina titulo="Objetos">
      <Container>{carro[2].modelo}</Container>
    </Pagina>
  );
};

export default objeto;
