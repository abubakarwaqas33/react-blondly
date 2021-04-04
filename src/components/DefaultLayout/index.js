import React from 'react';
import Header from '../shared/Header/Header'
import Home from '../Home';
import './index.scss'
export default function DefaultLayout() {
    return (
        <div className="default-layout">
            <Header />
            <Home />

        </div>
    )
}
