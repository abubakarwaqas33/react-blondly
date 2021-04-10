import React from 'react'
import './Banner.scss'
import bannerImg from '../../../images/logo/bannerimg.svg'

export default function Banner() {
    return (
        <section id="hero" class="banner-main d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h1>SUPERPUNKS - NFTs 2.0</h1>
                        <p>Earn tokens & rewards from holding and owning your NFTs, alongside voting governance and trading cross chain benefits</p>
                        <div class="d-flex justify-content-center justify-content-lg-start btns-banner ">
                            <a href="#" class="btn  btn-lg rounded-pill btn-primary ">Buy SUPERPUNKS on Opensea</a>
                            <a href="#" class="btn  btn-lg rounded-pill btn-primary">Read our Lightpaper</a>
                        </div>
                    </div>
                    <div class="col-lg-6" data-aos="zoom-in">
                        <img src="https://bootstrapmade.com/demo/templates/Appland/assets/img/hero-img.png" class="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
