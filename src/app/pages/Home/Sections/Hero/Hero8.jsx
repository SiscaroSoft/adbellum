import img from '@/assets/images/image4.jpg'

export const Hero8 = () => {
    return (
        <div className="section">
            <div className="hero8">
                <div className="hero8_content">
                    <div className="hero8_wrapper">
                        <div className="hero8_inner">
                            <div className="hero8_content-text">
                                <div className="hero8-column">
                                    <div>
                                        <h1>
                                            Lorem ipsum dolor sit, <br />
                                            a met consectetur <br />
                                            adipisicing elit.
                                        </h1>
                                    </div>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ipsa ad
                                            necessitatibus saepe.
                                        </p>
                                    </div>
                                    <div>
                                        <a
                                            href=""
                                            class="button w-inline-block is-light"
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
                            <div className="hero8_content-img">
                                <div className="hero8_content-img-wrapper">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
