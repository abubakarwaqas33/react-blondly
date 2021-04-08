import React from 'react'
import './Footer.scss'
export default function Footer() {
    return (
        <footer class="footer mt-auto py-3">
            <div class="container">
                <div className="jumbotron text-center">
                    <div class="text-base text-gray-600">
                        <h4>Built with 🧀 by CryptoChefs</h4>
                        <div class="mt-2">Contact us directly: <span class="content-block">
                            <a href="mailto:contact@fetatoken.com">
                                contact@fetatoken.com
                            </a>
                        </span>
                        </div>
                        <div class="text-sm mt-3 text-gray-500">FETA Token © 2021</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
