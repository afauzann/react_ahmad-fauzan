import { Container, Nav, Navbar } from "react-bootstrap";

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-home" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bolder" }}>
          C<span style={{ color: "red" }}>M</span>C
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "end" }}
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Product
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
