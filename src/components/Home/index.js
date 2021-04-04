import React from 'react';
import Header from '../shared/Header/Header'
import Banner from './Banner/Banner';
import Features from './Features/Features';
import RoadMap from './RoadMap/RoadMap';
import UpcomingProduct from './UpcomingProduct/UpcomingProduct';
import DigitalSolution from './DigitalSolution/DigitalSolution';
import MusicInfluencers from './MusicInfluencers/MusicInfluencers';

import './index.scss'
export default function index() {
    return (
        <div className="home">
               <Banner/>
               <Features/>
               <RoadMap/>
               <UpcomingProduct/>
               <DigitalSolution/>
               <MusicInfluencers/>
        </div>
    )
}
