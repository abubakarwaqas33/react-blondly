import React from 'react'
import Loader from "react-loader-spinner";
import './Loader.scss'

export default function AppLoader() {
    return (
        <div className="loader">
             <Loader
                type="MutatingDots"
                color="#00BFFF"
                height={100}
                width={100}
                //3 secs
            />
        </div>
    )
}
