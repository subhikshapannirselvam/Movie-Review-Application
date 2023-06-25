import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import  Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const Header=()=> {
  return (
    <Navbar bg="black" variant="dark">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":"gold"}}>My Movie Review Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="navBarScroll"/>
            <Navbar.Collapse id="scroll">
                <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:'100px'}} navbarScroll>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/watchlist">Watch List</NavLink>
                
                    </Nav>
            </Navbar.Collapse>
        </Container>
      
    </Navbar>
  )
}

export default Header
