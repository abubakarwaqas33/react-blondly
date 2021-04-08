import React, { Component } from 'react'
import './Alerts.scss'
import imageUrl from '../../../images/logo/alert.png';
import imageUrl2 from '../../../images/logo/search.png'

const alerts = [
    {
        title: "Let’s keep crypto fun and safe!",
        highlight: "REMEMBER",
        description: "- Don’t buy crypto with money you need for something else. Pay your medical bills, your rent, maybe buy a friend a coffee, whatever, before you buy crypto.",
        description2: "Keep it fun and keep it safe. Look after yourself and others.",
        imagUrl: imageUrl,
    },
    {
        title: "Audit results and recommendations",
        highlight: "REMEMBER",
        description: "- Don’t buy crypto with money you need for something else. Pay your medical bills, your rent, maybe buy a friend a coffee, whatever, before you buy crypto.",
        description2: "Keep it fun and keep it safe. Look after yourself and others.",
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
                            <h1 className="display-4 text-center">{alerts[0].title}</h1>
                            <p class="mb-2 md:mb-3 text-center"><strong>{alerts[0].highlight}</strong>
                                {alerts[0].description}
                            </p>
                            <p className="text-center p-end">{alerts[0].description}</p>
                        </div>

                    }
                </div>
            </div>
        </div>
    )

}
