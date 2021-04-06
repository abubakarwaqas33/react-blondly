import React from 'react'
import './CurrentMarketPlace.scss';
import currentMarketImg from '../../../images/current-market/current-market.svg'
import currentCrossImg from '../../../images/current-market/cross.svg'

function CurrentMarket() {
    return (
        <div className="current-market-main">
            <div className="section">
                <div className="wrapper">
                    <div className="main-grid">
                        <img src={currentMarketImg} className="market-img" id="w-node-c60da4afe96a-335d0bb5" alt="" />
                        <div id="w-node-c60da4afe96b-335d0bb5" data-w-id="c3669f2c-9c4f-f291-b6be-c60da4afe96b" class="intro left">
                            <div className="title dark-bg">frustrating &amp; complex</div>
                            <h2 class="heading-6">Current Marketplace Problems</h2>
                            <div data-w-id="9560c093-56e8-3a1b-9320-077d201f998c" className="feature-v8">
                                <img src={currentCrossImg} loading="lazy" alt="" className="image-6" />
                                <div className="text-block-6"> <strong>28% annual churn </strong> due to no recurring crypto payment </div>
                            </div>
                            <div data-w-id="9560c093-56e8-3a1b-9320-077d201f998c" className="feature-v8">
                                <img src={currentCrossImg} loading="lazy" alt="" className="image-6" />
                                <div className="text-block-6"> <strong>28% annual churn </strong> due to no recurring crypto payment </div>
                            </div>
                            <div data-w-id="9560c093-56e8-3a1b-9320-077d201f998c" className="feature-v8">
                                <img src={currentCrossImg} loading="lazy" alt="" className="image-6" />
                                <div className="text-block-6"> <strong>28% annual churn </strong> due to no recurring crypto payment </div>
                            </div>
                        </div>
                        
            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentMarket