import React from 'react';
import Header from '../shared/Header/Header'
import Banner from './Banner/Banner';
import Features from './Features/Features';

import './index.scss'
export default function index() {
    return (
        <div className="home">
               <Banner/>
               <Features/>
        </div>
    )
}
