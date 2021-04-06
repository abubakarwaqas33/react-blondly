import React, { useState, useEffect } from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer'
import Home from '../Home';
import Loader from '../shared/Loader/Loader'
import './index.scss'
export default function DefaultLayout() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    }, [])

    if (!loading) {
        return <Loader />
    }
    return (
        <div className="default-layout">
            <Header />
            <Home />
            {/* <Footer /> */}
        </div>
    )
}
