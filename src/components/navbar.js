import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image, NavDropdown } from "react-bootstrap";
import logobinus from "../asset/logobinus.png";

function NavbarComp() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="navbar mt-5">
            <Navbar
                expand="lg"
                className="shadow-sm border-bottom border-dark fixed-top"
                style={{ backgroundColor: "#003C30", color: "#FFFFFF" }}
                expanded={isExpanded}
                onToggle={() => setIsExpanded(!isExpanded)}
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="d-flex align-items-center">
                            <Image
                                src={logobinus}
                                alt="Logo"
                                style={{ width: "50px", marginRight: "10px" }}
                            />
                            <span style={{ fontSize: "1rem", fontWeight: "bold", color: "#C19556" }}>
                                SMK Bina Nusantara
                            </span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="styler">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className="text-light">
                                Dashboard
                            </Nav.Link>
                            <Nav.Link href="/siswa" className="text-light">
                                Siswa
                            </Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown" style={{ color: "#FFFFFF" }}>
                                <NavDropdown.Item href="/tentang" className="text-dark ">Tentang</NavDropdown.Item>
                                <NavDropdown.Item href="/visi-misi" className="text-dark ">Visi Misi</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComp;
