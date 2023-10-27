import { Container } from "react-bootstrap";


const HomePage = () => {
  return (
    <Container>
      <div className="text-center m-5">
          <h1>Bienvenido a <strong>Happy Cake</strong></h1>
          <p>El lugar de los pateles felices</p>
          <img className="pastel" src="https://cdn-icons-png.flaticon.com/512/3900/3900297.png " alt="pastel" />
      </div>
      
    </Container>
  );
};
export default HomePage;
