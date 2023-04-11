import React from "react";
import Pagina from "../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const objeto = () => {
  const carros = [
    {
      marca: "Chevrolet",
      modelo: "Camaro",
      ano: 2016,
      cor: "Preto",
      foto: "https://media.chevrolet.com/dld/content/dam/Media/images/BR/Vehicles/Chevrolet/autom%C3%B3veis/Camaro/2017/Product/2017-Chevrolet-Camaro-GM-Brazil-018.jpg",
    },
    {
      marca: "Ford",
      modelo: "Mustang",
      ano: 2015,
      cor: "Preto",
      foto: "https://uploads.vrum.com.br/2021/08/20210806130702145950o-741x417.jpg",
    },
    {
      marca: "Bugatti Veron",
      modelo: "Bugatti",
      ano: 2019,
      cor: "Cinza",
      foto: "https://s2.glbimg.com/BJwgAKNGxqIer8qmoK0HevFIb0k=/0x0:1984x1401/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/n/8/Kb1LO8TYqK7cT9d9fvZQ/bugatti-chiron-profilee-4-.jpeg",
    },
    {
      marca: "coenigsegg",
      modelo: "coenigsegg agera",
      ano: 2017,
      cor: "Branco",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Koenigsegg_Jesko_Genf_2019_1Y7A5546.jpg/1200px-Koenigsegg_Jesko_Genf_2019_1Y7A5546.jpg",
    },
    {
      marca: "Aston martin ",
      modelo: "Aston martin Vulcan",
      ano: 2018,
      cor: "prata",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFLQ6cYHJrkz0YX6ZmK1UwFMWHdgUWWmaAg&usqp=CAU",
    },
    {
      marca: "McLaren +-",
      modelo: "McLaren P1",
      ano: 2014,
      cor: "Cinza",
      foto: "https://hips.hearstapps.com/hmg-prod/images/2014-mclaren-p1-1111-charlie-magee-1531410060.jpg",
    },
  ];
  return (
    <Pagina titulo="Objetos">
      <Row>
        {carros.map((carro) => (
          <Col md={3} className="mb-4">
            <Card className="mb-3 col-12 row-3">
              <Card.Img
                variant="top"
                src={carro.foto}
                style={{ width: 260, height: 150 }}
              />
              <Card.Body>
                <Card.Title>{carro.modelo}</Card.Title>
                <Card.Text>
                  Ano: <strong>{carro.ano}</strong>
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default objeto;
