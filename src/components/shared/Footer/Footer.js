import React from 'react'

export default function Footer() {
    return (
            <footer className="border-t-2 border-gray-200">
                <div className="container py-6 md:py-10 lg:py-12 flex flex-col items-center justify-between text-center">
                    <div className="text-base text-gray-600">
                        <div>Built with 🧀 by CryptoChefs
                            </div><div class="mt-2">
                            Contact us directly:
                                <span className="content-block">
                                <a href="mailto:contact@fetatoken.com">contact@fetatoken.com</a>
                            </span>
                        </div>
                        <div className="text-sm mt-3 text-gray-500">
                            FETA Token © 2021
                        </div>
                    </div>
                </div>
            </footer>
    )
}
