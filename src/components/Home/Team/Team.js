import React from 'react'
import './Team.scss'
import team1 from '../../../images/team/team-1.svg'
import team2 from '../../../images/team/team-2.svg'
import team3 from '../../../images/team/team-3.svg'
import team4 from '../../../images/team/team-4.svg'
import team5 from '../../../images/team/team-5.svg'
import team6 from '../../../images/team/team-6.svg'
import ScrollAnimation from 'react-animate-on-scroll';

const features = [
    {
        title: "OneSie Dreams",
        description: "Use any chat app to make escrow for Crypto assets",
        imageUrl: team1
    },
    {
        title: "OneSie Dreams",
        description: "Use any chat app to make escrow for Crypto assets",
        imageUrl: team2
    },
    {
        title: "OneSie Dreams",
        description: "Use any chat app to make escrow for Crypto assets",
        imageUrl: team3
    },
    {
        title: "OneSie Dreams",
        description: "Use any chat app to make escrow for Crypto assets",
        imageUrl: team4
    },
    {
        title: "OneSie Dreams",
        description: "Use any chat app to make escrow for Crypto assets",
        imageUrl: team5
    },
    {
        title: "OneSie Dreams",
        description: "Use any chat app to make escrow for Crypto assets",
        imageUrl: team6
    },
]

export default function Team() {
    return (
        <div className="features-main" id="team">
            <div className="container-fluid">
                <div id="features" className="section">
                    <div class="container wrapper">
                        <div class="intro margin-bottom">
                            <div className="w-100 text-center">
                                <div class="title">The Team</div>
                            </div>
                            <h2 class="heading-5 text-center">Feta token is a cryptochefs project. Meet the cryptochefs team.?</h2>

                        </div>
                        <div className="row featured-grid">
                            {
                                features && features.map((feature, i) => {
                                    return <div key={i} class="col-lg-6">
                                        <ScrollAnimation animateIn='fadeIn'>
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
