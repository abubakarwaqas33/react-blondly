import React from 'react';
import './FetaLaunched.scss'
import url1 from '../../../images/feta-detail/fire.svg';
import url2 from '../../../images/feta-detail/heart.svg'
import url3 from '../../../images/feta-detail/network.svg'
import Features from '../Features/Features';

const fetaFeatures = [
    {
        url: url3,
        name: 'remove the 3% distributed to lenders'
    },
    {
        url: url1,
        name: 'keep 3% burned every airdrop'

    },
    {
        url: url2,
        name: 'remove 3% charity'
    },

]

export default function FetaLaunched() {
    return (
        <div className="fetaLaunched-main">
            <div className="container">
                <div className="row feta-launch">
                    <div className="col-md-6 launch-left left">
                        <p>
                            There will be a launch of a <strong>our token </strong>
                            in May 2021. There will be an airdrop
                            for owners of any one of the NFTs within
                            our network. The more NFTs owned = the greater your allocation
                            on the airdrop! Cool right?

                        </p>
                    </div>
                    <div className="col-md-6 launch-left right">
                        <p>
                            <strong>SUPERPUNKS</strong> is part of a closed, premium NFT network
                        which will allow owners to collect rewards via on <strong>chain transactions,
                        yields based on the traits of your NFTs and airdrops </strong> throughout
                        our NFT network.Its time to turn
                        your NFT into a real value machine that it was born to be
                        </p>
                    </div>
                </div>
                <div className="row feta-detail border-top">
                    <div className="col-md-3 title ">
                        Automatic distribution every 2 weeks
                        </div>
                    {
                        fetaFeatures.map(feature => {
                            return (
                                <div className="col-md-3 info">
                                    <div className="row icons">
                                        <div className="col-sm-12 col-md-4">
                                            <img src={feature.url} className="img-fluid float-start" />
                                        </div>
                                        <div className="col-sm-12 col-md-8 text-center">
                                            <h6> {feature.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
