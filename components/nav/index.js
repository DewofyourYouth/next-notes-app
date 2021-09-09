import { Container, Nav, Navbar } from "react-bootstrap";

import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Notes App</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link href="/new-note" passHref>
            <Nav.Link>New Note</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
