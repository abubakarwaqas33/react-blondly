import React from 'react';
import BannerRemove from './Banner-remove/Banner';
import Features from './Features/Features';
import RoadMap from './RoadMap/RoadMap';
import UpcomingProduct from './UpcomingProduct/UpcomingProduct';
import DigitalSolution from './DigitalSolution/DigitalSolution';
import MusicInfluencers from './MusicInfluencers/MusicInfluencers';
import PolKapets from './PolKapets/PolKapets';
import BCCG from './BCCG/BCCG';
import Capital from './Capital/Capital';
import Stalking from './Stalking/Stalking';
import Partner from './Partner/Partner ';
import Team from './Team/Team';
import RoadMap2 from './RoadMap-2/RoadMap-2';
import CurrentMarketPlace from './CurrentMarketPlace/CurrentMarketPlace';
import OurSolution from './OurSolution/OurSolution';
import Footer from './../shared/Footer/Footer'
import FetaLaunched from '../Home/FetaLaunched/FetaLaunched'
import Alerts from './Alerts/Alerts'
import About from './About/About';
import Banner from './Banner/Banner'
import HeaderFixed from './../shared/HeaderFixed/HeaderFixed';
import Header from './../shared/Header/Header'


import './index.scss'


export default function index() {
    return (
        <div className="home">
            <Header/>
            <Banner />
            <FetaLaunched />
            <RoadMap/>
            {/* <RoadMap2 /> */}
            <Alerts />
            <About />
            {/* <Alerts type="alert" /> */}
            <Footer/>


            {/* <Features />
            <CurrentMarketPlace />
            <RoadMap2 />
            <OurSolution />
            <UpcomingProduct />
            <DigitalSolution /> */}
            {/* <MusicInfluencers /> */}
            {/* <PolKapets />
            <BCCG />
            <Capital />
            <Stalking />
            <Partner />
            <Team /> */}
        </div>

    )
}
