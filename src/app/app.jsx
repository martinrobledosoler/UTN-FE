import { Nav, Navbar, Button, Form } from "react-bootstrap";

export function App(){
    return (
        <div className="App">
            <div className="bg-dark mb-3 pb-14">
                <Navbar variant="dark" sticky="top" expand="sm" collapseOnSelect>
                    <Navbar.Brand>
                      <img src="" width="40px" height="40px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="coloring" />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/stadistics">Stadistics</Nav.Link>
                        </Nav>
                        <Button variant="outline-success">Login</Button>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    <Form>
                        <Form.Group className="mb-3 mt-3">
                            <Form.Control type="text" placeholder="Search for jobs.." />
                        </Form.Group>
                    </Form>
                </div>
            </div>
          
            <div className="container">
              aqui se renderiza el contenido
            </div>

            <footer>
                <section>
                    <h1>Soy el footer</h1>
                </section>
             </footer>
        </div>
    );
}