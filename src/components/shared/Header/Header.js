import React, { useState } from 'react'
import './Header.scss'
import logo from '../../../images/logo/logo-horizontal_white.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Button } from 'reactstrap';
const navLinks = [
    {
        name: "About",
        url: "#about"
    },

    {
        name: "Alert",
        url: "#alert"
    },

    {
        name: "Roadmap",
        url: "#roadmap"
    },


]
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    return (
        <div className="header-main">
            <div className="container" style={{ paddingLeft: "0", paddingRight: "0" }}>
                <Navbar light expand="md">
                    <NavbarBrand href="#">
                        <img src="https://www.superpunks.club/images/logo.png" className="logo-icon" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                navLinks && navLinks.map(navLink => {
                                    return <NavItem>
                                        <NavLink href={navLink.url}>{navLink.name}</NavLink>
                                    </NavItem>
                                })
                            }
                              <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><i class="fab fa-telegram-plane"></i></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><i class="fab fa-twitter"></i></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><i class="fab fa-instagram"></i></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> <i class="fab fa-discord"></i></a>
                    </li>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}
