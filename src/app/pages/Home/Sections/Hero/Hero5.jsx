import img1 from '@/assets/images/image3.jpg'

export const Hero5 = () => {
    return (
        <div className="hero5">
            <div className="hero5_content">
                <div className="hero5_content-grid">
                    <div className="hero5_content-grid-row">
                        <div className="hero5_content-grid-col">
                            <div className="hero5_content-grid-reveal">
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem</h1>
                                <p>Lorem ipsum dolor sit amet</p>
                                <a
                                    href=""
                                    class="button w-inline-block is-dark"
                                    style={{
                                        maxWidth: '200px',
                                        display: 'block',
                                        margin: '2rem auto',
                                        mixBlendMode: 'normal',
                                    }}>
                                    <div class="nav_text-wrap">Asociados</div>
                                    <div class="button-hover"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero5_background">
                <div className="hero5_video">
                    <div className="hero5_image">
                        <span className="hero5_image-inner">
                            <img src={img1} alt="" />
                        </span>
                    </div>
                    <video src={img1} className="hero5_media"></video>
                </div>
            </div>
        </div>
    )
}
