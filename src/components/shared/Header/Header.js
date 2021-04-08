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
        name: "Features",
        url: "#feature"
    },
    {
        name: "Roadmap",
        url: "#roadmap"
    },
    {
        name: "Staking",
        url: "#stalking"
    },
    {
        name: "NFT",
        url: "#nft"
    },
    {
        name: "Partners",
        url: "#partners"
    },
    {
        name: "Team",
        url: "#team"
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
                        <img src={logo} className="logo-icon" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {
                                navLinks && navLinks.map(navLink => {
                                    return <NavItem>
                                        <NavLink href={navLink.url}>{navLink.name}</NavLink>
                                    </NavItem>
                                })
                            }

                        </Nav>
                        <NavLink href="#" className="nav-btn btn-lg ">Get Blondly</NavLink>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}
