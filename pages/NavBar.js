import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/Link'
const NavBar = () => {
return (
<Navbar bg="light" variant="light">
<Navbar.Brand href="#home">Social Stars</Navbar.Brand>
<Nav className="mr-auto">
 <Nav.Link href="/AddPerson">Add Person</Nav.Link>
 <Nav.Link href="/Search">Search</Nav.Link>
 <Nav.Link href="/Inbox">Inbox</Nav.Link>
</Nav>
</Navbar>
)
}
export default NavBar