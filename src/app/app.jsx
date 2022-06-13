import { Nav, Navbar, Button, Form } from "react-bootstrap";

export function App(){
    return (
        <div className="App">
            <div className="bg-dark" style={{paddingBottom : "3%"}}>
                <Navbar variant="dark" sticky="top" expand="sm" collapseOnSelect className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand>
                      <img src="/hw-logo.svg" width="40px" height="40px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="coloring" />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/stadistics">Stadistics</Nav.Link>
                        </Nav>
                        <Button variant="outline-success" >Login</Button>
                        
                    </Navbar.Collapse>
                </Navbar>
                <div className="container" style={{marginTop : "2%"}}>
                    <Form>
                        <Form.Control type="text" placeholder="Search for jobs.." />
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