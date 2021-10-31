import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../LoginHooks/useAuth';


const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <>
       
 <Navbar  bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg" >
 <Container>
 <Navbar.Brand href="#home">T O U R    P L A N</Navbar.Brand>
<Navbar.Toggle />
 <Navbar.Collapse className="justify-content-end">

        <Nav.Link as={ HashLink } to="/home#home">Home</Nav.Link>
        <Nav.Link as={ HashLink } to="/services">Service</Nav.Link>
        
         <Nav.Link as={ HashLink } to="/addservice">Add-Service</Nav.Link>
         
         <Nav.Link as={ HashLink } to="/myOrder">My Order</Nav.Link>
         <Nav.Link as={ HashLink } to="/manageAllOrder">Manage All Order</Nav.Link>

         <Link to='/manageservice'>Manage-Service</Link>
      
         {user?.email ? 
           <Button onClick={logOut} variant="dark">Logout</Button>:
          <Nav.Link as={ HashLink } to="/login">Login</Nav.Link>}
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
       
      </Navbar.Text>
    </Navbar.Collapse>
 </Container>
</Navbar>

        </>
    );
};

export default Header;