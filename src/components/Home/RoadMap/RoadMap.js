import React from 'react'
import './RoadMap.scss';
import imgTrueUrl from '../../../images/feta-detail/true.svg'
import ScrollAnimation from 'react-animate-on-scroll';



function RoadMap2() {
    return (
        <div className="roadmap-main ">
            <div className="container">
                <div className="info text-center">
                    <h1 className="">Roadmap</h1>
                    <p>2021 Product and Partnership Roadmap</p>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-img"></div>
                        <div className="timeline-content js--fadeInLeft border">
                            <h2>April - June 2021</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>V2 beta website launch</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>V2 full website launch</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Token initial allocation & airdrop</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>NFT Town Hall Governance deployment</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Marketing Launch</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Cross Chain Partnerships (BSC, Dot, Solana)</span>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-img"></div>
                        <div className="timeline-content js--fadeInLeft border">
                            <h2>July - September 2021</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>V3 website launch - full user functionality</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>NFT Marketplace MVP + Rollout</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Full Staking + Weekly % Yields Reward deployment</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Native staking</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Full voting governance across NFTs with auto reward protocol</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Testnet NFT swapping mechanism</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Influencer + Business Partnerships drive</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Liquidity Pool initiated</span>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-img"></div>
                        <div className="timeline-content js--fadeInLeft border">
                            <h2>October - December 2021</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Full NFT protocol rollout</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>New pairs added (token)</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Secondary token deployed</span>
                                </li>
                                <li className="list-group-item">
                                    <img src={imgTrueUrl} className="img-fluid float-start" />
                                    <span>Airdrops and loyalty reward benefits</span>
                                </li>
                             
                            </ul>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>
    )
}

export default RoadMap2
