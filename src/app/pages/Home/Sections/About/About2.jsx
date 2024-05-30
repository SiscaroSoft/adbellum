import img3 from '@/assets/images/image3.jpg'

export const About2 = () => {
    return (
        <div className="section_about2">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-xlarge">
                        <div className="v-flex-large">
                            <div className="h-flex-medium">
                                <h2 className="info-large" style={{ textAlign: 'left' }}>
                                    Lorem
                                </h2>
                                <div className="title_chip">
                                    <div className="z">
                                        <div className="circle_icon"></div>
                                        <div className="chip">
                                            LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. SEQUI VOLUPTATEM
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="info-large">Ipsum dolor</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="padding-section">
                <div className="about2_slider">
                    <div className="w-slider-mask">
                        <div className="w-slide">
                            <div className="w-slide-content">
                                <div className="w-slide-wrap">
                                    <img src={img3} alt="" className="w-slide-image" />
                                </div>

                                <div className="w-slide-info">
                                    <div className="w-slide-title">Lorem ipsum dolor, sit amet</div>
                                    <p className="w-slide-desc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quidem temporibus
                                        maiores repellat? Magnam nam animi reprehenderit? Soluta sapiente maxime vel
                                        ratione reiciendis sunt, recusandae perferendis ad, blanditiis temporibus
                                        pariatur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about2_slider-right"></div>
                </div>
            </div>
        </div>
    )
}
