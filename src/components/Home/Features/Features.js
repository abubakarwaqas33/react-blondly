import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import './Features.scss'
import feature1 from '../../../images/features/feature-1.png'
import feature2 from '../../../images/features/feature-2.png'
import feature3 from '../../../images/features/feature-3.png'
import feature4 from '../../../images/features/feature-4.png'

const features = [
    {
        title: "Versatil",
        description: "Use any chat app to make escrow for Crypto assets",
        imageUrl: feature1
    },
    {
        title: "Innovative",
        description: "Features trustless swapping and recurring payments",
        imageUrl: feature2
    },
    {
        title: "Interoperable",
        description: "Works across chains",
        imageUrl: feature3
    },
    {
        title: "Transparent",
        description: "Activity happens on chain",
        imageUrl: feature4
    }
]

export default function Features() {
    return (
        <div className="features-main" id="feature">
            <div className="container-fluid">
                <div id="features" className="section">
                    <div class="container wrapper">
                        <ScrollAnimation animateIn='fadeIn'>

                            <div class="intro margin-bottom">
                                <div className="w-100 text-center">
                                    <div class="title">features</div>
                                </div>
                                <h2 class="heading-5 text-center">Why Bondly?</h2>
                            </div>
                        </ScrollAnimation>
                        <div className="row featured-grid">
                            {
                                features && features.map((feature, i) => {
                                    return <div key={i} class="col-lg-3">
                                        <ScrollAnimation animateIn='bounceInRight'>
                                            <div id="w-node-f41526ea90ab-335d0bb5" data-w-id="12a85cac-4837-8da5-7ade-f41526ea90ab" class="feature-card">
                                                <img src={feature.imageUrl} alt={feature.title} class="feature-image-small" />
                                                <h5 class="heading-4">{feature.title}</h5>
                                                <p class="text-small text-grey">{feature.description}</p>
                                            </div>
                                        </ScrollAnimation>
                                    </div>

                                })
                            }
                        </div>
                        <div class="d-flex justify-content-center"><a href="https://app.uniswap.org/#/swap/0xd2dda223b2617cb616c1580db421e4cfae6a8a85" target="_blank" className="btn-lg button w-button">Get Bondly</a></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
