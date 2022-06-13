import { Nav, Navbar, Button } from "react-bootstrap";

export function App(){
    return (
        <div className="App">
          <Navbar bg="dark" variant="dark"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
              <img src="" width="40px" height="40px" alt="" />
            </Navbar.Brand>
    
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Profile</Nav.Link>
                <Nav.Link href="#">Stadistics</Nav.Link>
              </Nav>
              
              <Button variant="outline-success">Login</Button>
              
            </Navbar.Collapse>
    
          </Navbar>
          <div className="content">
            aqui se renderiza el contenido
          </div>
        </div>
      );
}