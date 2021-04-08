import React from 'react'
import './RoadMap-2.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function RoadMap2() {
    return (
        <div className="roadmap-main container-fluid" id="roadmap">
            <div class="section">
                <div class="container">
                    <div class="intro margin-bottom" >
                        <div style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 'transform-style': 'preserve-3d' }} class="title">Roadmap</div>
                        <h2 style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 'transform-style': 'preserve-3d' }} class="heading-margin-big">2021 Product and Partnership Roadmap </h2>
                        <p> </p>
                    </div>
                    <div class="timeline">
                        <ScrollAnimation animateIn='flipInY'
                           >

                            <div class="timeline-container primary">
                                <div class="timeline-icon">
                                    <i class="far fa-grin-wink"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">Q1 2021</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                    <p class="timeline-subtitle">1 Hours Ago</p>
                                </div>
                            </div>
                            <div class="timeline-container danger">
                                <div class="timeline-icon">
                                    <i class="far fa-grin-hearts"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">Q2 2021</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                    <p class="timeline-subtitle">2 Hours Ago</p>
                                </div>
                            </div>
                            <div class="timeline-container success">
                                <div class="timeline-icon">
                                    <i class="far fa-grin-tears"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">Q3 2021</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                    <p class="timeline-subtitle">6 Hours Ago</p>
                                </div>
                            </div>
                            <div class="timeline-container warning">
                                <div class="timeline-icon">
                                    <i class="far fa-grimace"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">Q4 2021</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                    <p class="timeline-subtitle">1 Day Ago</p>
                                </div>
                            </div>
                        </ScrollAnimation>ٖ
                    </div>

                </div>
                <a href="#" target="_blank" class="button w-button">Q2 Roadmap</a>
            </div>
        </div>
    )
}

export default RoadMap2
