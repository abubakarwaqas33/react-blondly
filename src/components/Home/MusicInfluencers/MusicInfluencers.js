import React from 'react'
import './MusicInfluencers.scss'
const musicProfiles = [1, 2, 3]
export default function MusicInfluencers() {
    return (
        <div className="musicInfluencers-main">
            <div class="container-fluid section" id="success">
                <div class="wrapper">
                    <div class="wrapper">
                        <div className="intro">
                            <div class="title">Music & Influencer</div>
                            <h2 class="heading-5">Recent Success</h2>
                            <p>Tory Lanez, Logan Paul and Pellek launched NFTs with Bondly recently.</p>
                        </div>
                    </div>
                    <div class="row w-layout-grid  feature-grid">
                        {
                            musicProfiles && musicProfiles.map(profile => {
                                return <div>
                                    <div class="feature-card">
                                        <img src="https://i.imgur.com/Ap1d3Sh.png" alt="" class="" />
                                        <a href="https://www.rollingstone.com/pro/features/music-nfts-timeline-kings-of-leon-grimes-3lau-1138437/"
                                            target="_blank" class="button ghost w-button">In The News</a>
                                        <a href="https://opensea.io/collection/tory" target="_blank" class="button ghost w-button">Tory's NFTs</a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div class="container-4 w-container">
                        <p>Looking to create and sell your NFTs? Fill the form below today. </p>
                        <a class="typeform-share button w-button" href="https://form.typeform.com/to/VYcB3S8s?typeform-medium=embed-snippet" data-mode="drawer_right"  target="_blank">Collaboration Form </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
