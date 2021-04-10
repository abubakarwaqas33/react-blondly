import React from 'react'
import './Footer.scss'
export default function Footer() {
    return (
        <footer class="footer mt-auto py-3">
            <div class="container">
                <div className="jumbotron text-center">
                    <div className="row">
                        <div className="col-md-6 left">
                            <ul class="nav nav-links-top">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Team</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">RoadMap</a>
                                </li>
                            </ul>
                            <p
                            >Superpunks are part of a premium network of
                                collectibles, focused on building value for its
                                owners through staking, yielding, auto rewards
                                and governance, amongst a range of disruptive
                                features to the market.
                            </p>
                            <ul class="nav">
                                <li class="nav-item">
                                    <span class="nav-link no-lr-padding">SUPERPUNKS © 2021 All Rights Reserved.</span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link border rounded-circle icons"><i class="fab fa-linkedin-in"></i></span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link border rounded-circle icons"><i class="fab fa-linkedin-in"></i></span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link border rounded-circle icons"><i class="fab fa-twitter"></i></span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link border rounded-circle icons"><i class="fab fa-linkedin-in"></i></span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link border rounded-circle icons"><i class="fab fa-facebook-f"></i></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 right">
                            <div className="join-detail">
                                <h1 className="join-discord">Join our discord community</h1>
                                <div class="row sizes">
                                    {/* <div className="col-lg-7 col-sm-12">
                                        <p>Superpunks are part of a 
                                            premium network of collectibles,
                                            focused on building value</p>
                                    </div> */}
                                    <div className="col-lg-12 col-sms-12">
                                        <p>Superpunks are part of a premium network of
                                        collectibles, focused on building value for its
                                        owners through staking</p>
                                        <button className="btn btn-lg btn-primary rounded-pill">JOIN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div class="text-base text-gray-600">
                        <h4>Built with 🧀 by CryptoChefs</h4>
                        <div class="mt-2">Contact us directly: <span class="content-block">
                            <a href="mailto:contact@fetatoken.com">
                                contact@fetatoken.com
                            </a>
                        </span>
                        </div>
                        <div class="text-sm mt-3 text-gray-500">FETA Token © 2021</div>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}
