import React from 'react';
import { ReactSVG } from 'react-svg'
import './Banner.scss';

const Banner = () => {
    return (
        <div className="top-banner-main">
            <div className="section hero-v3">
                <div className="wrapper">
                    <div className="w-layout-grid main-grid">
                        <div id="w-node-c8c4404c9e96-335d0bb5" className="intro left">
                            <div className="title dark-bg">Bondly x NFTs</div>
                            <h1 className="heading-3">NFT Collection</h1>
                            <p className="paragraph-2">Bondly will be powering the next generation of digital collectibles with crypto projects, brands and artists.</p>

                            <br />

                            <a href="https://app.uniswap.org/#/swap?inputCurrency=0xd2dda223b2617cb616c1580db421e4cfae6a8a85" target="_blank" className="button  w-button ghost">Buy Bondly Tokens →</a>
                            <br />
                            <a href="https://opensea.io/assets/bccg" target="_blank" className="button  w-button ghost">Bondly's Card game →</a>
                            <br />
                            <a href="https://opensea.io/assets/polkapets" target="_blank" className="button  w-button ghost">PolkaPets →</a>
                            <br />
                            <br />

                            <a href="https://hecswap.app/" target="_blank" className="button  w-button">HEC BondSwap</a>
                        </div>
                        <img src="../i.imgur.com/VqMsTEG.png" width="400" className="logan" id="w-node-5029343991fb-335d0bb5" data-w-id="a3664690-6bfa-256b-1c7e-5029343991fb" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 'transform-style': 'preserve-3d' }} alt="" />
                    </div>
                </div>
                <div className="bg-clouds">
                    <div className="dots"></div><ReactSVG src="../../../images/circle-white.svg" /><img src={require("../../../images/circle-white.svg")} alt="" className="circle-big" /></div>
            </div>
        </div>
    )
}

export default Banner;