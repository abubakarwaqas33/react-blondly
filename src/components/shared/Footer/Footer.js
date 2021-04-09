import React from 'react'
import './Footer.scss'
export default function Footer() {
    return (
        <footer class="footer mt-auto py-3">
            <div class="container">
                <div className="jumbotron text-center">
                    <div className="row">
                        <div className="col-md-6 left">
                            {/* <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul> */}
                            <p
                            >Superpunks are part of a premium network of
                                collectibles, focused on building value for its
                                owners through staking, yielding, auto rewards
                                and governance, amongst a range of disruptive
                                features to the market.
                            </p>
                            <ul class="nav">
                                <li class="nav-item">
                                    <span class="nav-link no-lr-padding">SUPERPUNKS © 2021</span>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
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
