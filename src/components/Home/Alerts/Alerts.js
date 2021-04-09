import React, { Component } from 'react'
import './Alerts.scss'
import imageUrl from '../../../images/feta-detail/sound.svg';
import imageUrl2 from '../../../images/feta-detail/search.svg'

const alerts = [
    {
        title: "Shout from the rooftops! NFTs 2.0 is here, finally!",
        highlight: "REMEMBER",
        description: " - This is more than just an NFT, more than just a collectable, more than just an opportunity to make money. Below we go over a range of benefits of SUPERPUNKS & NFTs in our network - feel free to reach out to us on Twitter if you have questions or queries about anything!",
        imagUrl: imageUrl,
    },
    {
        title: "Audit results and recommendations",
        highlight: "REMEMBER",
        description: " - Don’t buy crypto with money you need for something else. Pay your medical bills, your rent, maybe buy a friend a coffee, whatever, before you buy crypto.",
        type: "alert",
        imagUrl: imageUrl2
    }
]
export default function Alerts({ type }) {
    return (
        <div className="alerts-main">
            <div className="container">
                <div className="jumbotron alert rounded">
                    {
                        type ? <div>
                               <img src={alerts[1].imagUrl} alt="no image" />
                                <h1 className="display-4 text-center">{alerts[1].title}</h1>
                                {/* <p class="mb-2 md:mb-3 text-center"><strong>{alerts[1].highlight}</strong>
                                    {alerts[1].description}
                                </p>
                                <p className="text-center p-end">{alerts[1].description}</p> */}
                            </div> :
                           <div>
                           <img src={alerts[0].imagUrl} alt="no image" />
                            <h1 className="display-4 text-center mb-3">{alerts[0].title}</h1>
                            <p class="mb-2 md:mb-3 text-center"><strong>{alerts[0].highlight}</strong>
                                {alerts[0].description}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}
