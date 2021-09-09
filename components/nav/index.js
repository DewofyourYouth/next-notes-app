import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Notes App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/new-note">New Note</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
