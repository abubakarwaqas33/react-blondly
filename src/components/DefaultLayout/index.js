import React from 'react';
import Header from '../shared/Header/Header'
import Home from '../Home';

export default function DefaultLayout() {
    return (
        <div className="default-layout">
            <Header />
            <Home />
            
        </div>
    )
}
