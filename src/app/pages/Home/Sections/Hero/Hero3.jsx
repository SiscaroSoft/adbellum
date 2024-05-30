import img3 from '@/assets/images/image2.jpg'

export const Hero3 = () => {
    return (
        <div className="section">
            <div className="hero3">
                <div className="hero3_banner">
                    <div className="hero3_banner-captions">
                        <div className="hero3_banner-caption">
                            <h1>
                                Lorem <br />
                                Ipsum dolor sit amet consectetur <span>adipisicing</span>
                                <br />
                                elit. Expedita <span className="text--light">amet?</span>
                            </h1>

                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                <strong>adipisicing elit. Maxime obcaecati</strong>
                            </p>
                            <a href="" className="hero3_banner-button">
                                Vamos
                            </a>
                        </div>
                    </div>
                    <div className="hero3_banner-images">
                        <div className="hero3_slider">
                            <div className="hero3_slider-slide">
                                <div>
                                    <img src={img3} alt="" />
                                </div>
                            </div>

                            <div className="hero3_slider-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
