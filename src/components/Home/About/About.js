import React from 'react'
import './About.scss'
export default function About() {
    return (
        <div className="about-main" id="about">
            <div className="container">
                <div className="about">
                    <div className="info">
                        <h1 className="display-4 text-center">About the project</h1>
                        <p class="mb-2 md:mb-3 text-center">
                        SUPERPUNKS are part of a collective of premium NFTs driven to bring more value to its owners, beyond a pure buy and sell for profit, our goal is to incentivise multi use of NFTs, alongside significant benefits from holding on to that very asset

                        </p>
                    </div>
                    <div class="list-group">
                        {/* <div class="list-group-item">
                            <p className="p-2 font-weight-bold no-padding">
                                We want you to feel️ happy 😊 and secure 🔒 holding Feta token. Crypto is a trustless world, so remember: don’t trust, verify! With Feta token we’ve tried to make that verification as easy as possible
                            </p>
                        </div> */}
                        <div class="list-group-item d-xl-flex d-sm-flex flex-row">
                            <h1 className="p-2">Staking: How does it work?</h1>
                            <p className="p-2">
                            Superpunks are super so you have the opportunity to ‘save’ civilians with your NFT. What does that ultimately mean? It means you can, by holding and owning Superpunk, earn tokens. The staking mechanism (“saving”) of civilians is fairly simple, however, we have explained it in more detail below.

                            </p>
                        </div>
                        <div class="list-group-item  d-xl-flex d-sm-flex flex-row">
                            <h1 className="p-2">So, what will be the yield for each punk?</h1>
                            <p className="p-2">In a unique process, governance from Superpunk holders monthly will affect which attributes gain the best yields, with a leaderboard released for it monthly to holders. Stay an active part of the community and vote to ensure your punks attributes achieve the best yields possible! More on this soon.</p>
                        </div>

                        <div class="list-group-item  d-xl-flex d-sm-flex flex-row">
                            <h1 className="p-2" style={{width: "20%"}}>Rewards</h1>
                            <p className="p-2">Fortnightly airdrops in the form of rewards, special events, free tokens and yield upgrades all for Superpunk holders</p>
                        </div>

                        <div class="list-group-item  d-xl-flex d-sm-flex flex-row">
                            <h1 className="p-2" style={{width: "24%"}}>Random Minting</h1>
                            <p className="p-2">Minting is completely done at random. Whether you are the first to mint or the last, your chances of getting a particular Superpunk is the same.</p>
                        </div>
                        <div class="list-group-item d-xl-flex d-sm-flex flex-row">
                            <h1 className="p-2">Protect Your City - Governence</h1>
                            <p className="p-2">Every Superpunk owner has equal voting power and a right to be a part of with further additions and features that will occur on the project. For the governance of the project we are looking to implement governance tokens for the project. More on this soon!
.</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
