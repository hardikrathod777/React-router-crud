import React from 'react'
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='Navbar-pos'>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to={'/'} className='p-2 link-r'>Home</Link>
                        <Link to={'/addData'} className='p-2 link-r'>Add Data</Link>
                        <Link to={'/viewData'} className='p-2 link-r'>View Data</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header