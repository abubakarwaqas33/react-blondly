import React from 'react';
import Header from '../shared/Header/Header'
import Banner from './Banner/Banner';
import './index.scss'
import RoadMap from './RoadMap/RoadMap';
export default function index() {
    return (
        <div className="home">
               <Banner/>
               <RoadMap/>
        </div>
    )
}
