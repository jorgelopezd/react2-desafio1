import { Container, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container className="pt-5 text-center">
      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      <div className="form-group mb-5">
          <label>Correo:</label>
          <input type="text" className="form-control" placeholder="name@example.com"/>
      </div>
      <div className="form-group mb-3">
          <label>Descripcion:</label>
          <input type="text" className="form-control" />
          <Button className="m-3" variant="danger">Enviar</Button>
      </div>
    </Container>
  );
};
export default ContactPage;
