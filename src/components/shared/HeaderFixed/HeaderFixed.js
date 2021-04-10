import React from 'react'
import './HeaderFixed.scss'
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


export default function HeaderFixed() {
    return (
        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">

                {/* <h1 class="logo me-auto "><a href="#">Arsha</a></h1> */}
                <a href="#" class="logo me-auto"><img src="https://fetatoken.com/img/logo-with-text.svg" alt="" class="img-fluid" /></a>
                <ul class="nav">

                    {
                        navLinks && navLinks.map(navLink => {
                            return <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href={navLink.url}>{navLink.name}</a>
                            </li>
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

                </ul>
            </div>
        </header>
    )
}
