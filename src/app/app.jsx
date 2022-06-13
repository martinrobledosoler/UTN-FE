import { Nav, Navbar, Button, Form } from "react-bootstrap";
import { Home } from './home';
import { Profile } from './profile';
import { Stadistics } from './stadistics';

function render(element) {
    let content = document.getElementById('content');

    alert(element);
}

export function App(){
    return (
        <div className="App">
            <div className="bg-dark" style={{paddingBottom : "3%"}}>
                <Navbar variant="dark" sticky="top" expand="sm" collapseOnSelect className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand>
                      <img src="/hw-logo.svg" width="60px" height="60px" alt="from devs to devs" className="mx-3"/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="coloring mx-3" />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link onClick={() => render("home")}>Home</Nav.Link>
                            <Nav.Link onClick={() => render("profile")}>Profile</Nav.Link>
                            <Nav.Link onClick={() => render("stadistics")}>Stadistics</Nav.Link>
                        </Nav>
                        <Button variant="outline-success" href="/Login" className="ms-auto mx-3">
                            Login
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container" style={{marginTop : "2%"}}>
                    <Form>
                        <Form.Control type="text" placeholder="Search for jobs.." />
                    </Form>
                </div>
            </div>
          
            <div className="container" id="content">
              <Home />
            </div>

            <footer className="bg-dark" style={{position : 'absolute', bottom : '0', width: '100%', height: '20%'}}>
                <section className="container">
                </section>
             </footer>
        </div>
    );
}