import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/Link'
const NavBar = () => {
return (
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">Social Stars</Navbar.Brand>
<Nav className="mr-auto">
 <Nav.Link href="#home">Add Person</Nav.Link>
 <Nav.Link href="#features">Search</Nav.Link>
 <Nav.Link href="#pricing">Inbox</Nav.Link>
</Nav>
</Navbar>
)
}
export default NavBar