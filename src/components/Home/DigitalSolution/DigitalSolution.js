import React from 'react'
import './DigitalSolution.scss'

export default function DigitalSolution() {
    return (
        <div className="digital-solution-main">
            <div className="container-fluid section haze no-padding-top" id="Products">
                <div className="wrapper">
                    <div className="intro margin-bottom">
                        <div className="title">Digital Asset Solutions</div>
                        <h2 className="heading-5">Products and Industries</h2>
                    </div>
                    <img src="https://i.imgur.com/M5QWAO9.png" loading="lazy" width="1119"
                        sizes="(max-width: 479px) 94vw, (max-width: 1279px) 95vw, 1119px" alt="" className="image-2" />
                    <a href="http://bswap.app/" target="_blank" className="button w-button">Try Bswap Today</a>
                </div>
            </div>
        </div>
    )
}
