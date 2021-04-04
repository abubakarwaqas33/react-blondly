import React, { useState } from 'react'
import './Header.scss'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Button } from 'reactstrap';
const navLinks = [
    {
        name: "Roadmap",
        url: "#roadmap"
    },
    {
        name: "Recent Success",
        url: "#success"
    },
    {
        name: "Launchpad",
        url: "#lauchpad"
    },
    {
        name: "Staking",
        url: "#stalking"
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
    return (
        <div className="header-main">
            <div className="container">
                <Navbar light expand="md">
                    <NavbarBrand href="#">
                        <img src="https://loremflickr.com/156/40" className="logo-icon"/>
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
                        <NavLink href="#" className="nav-btn btn-sm">Get Blondly</NavLink>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}
