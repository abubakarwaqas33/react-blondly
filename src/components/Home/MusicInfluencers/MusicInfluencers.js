import React from 'react'
import './MusicInfluencers.scss'
const musicProfiles = [1, 2, 3]
export default function MusicInfluencers() {
    return (
        <div className="musicInfluencers-main">
            <div class="container-fluid section" id="success">
                <div class="wrapper">
                    <div class="wrapper">
                        <div class="title">Music & Influencer</div>
                        <h2 class="heading-5">Recent Success</h2>
                        <p>Tory Lanez, Logan Paul and Pellek launched NFTs with Bondly recently.</p>
                    </div>
                    <div class="row">
                        {
                            musicProfiles && musicProfiles.map(profile => {
                                return <div>
                                    <div class="col-lg-4 feature-card">
                                        <img src="https://i.imgur.com/Ap1d3Sh.png" alt="" class="" />
                                        <a href="https://www.rollingstone.com/pro/features/music-nfts-timeline-kings-of-leon-grimes-3lau-1138437/"
                                            target="_blank" class="button ghost w-button">In The News</a>
                                        <a href="https://opensea.io/collection/tory" target="_blank" class="button ghost w-button">Tory's NFTs</a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
