import img1 from '@/assets/images/image.jpg'
import img2 from '@/assets/images/image2.jpg'
import img3 from '@/assets/images/image3.jpg'

export const Work3 = () => {
    return (
        <>
            <div className="section">
                <div className="site-work3" style={{ margin: '10rem 0' }}>
                    <div className="site-grid-3">
                        <div className="grid-item">
                            <div className="box box-article">
                                <a href="" className="floating-link"></a>
                                <div className="box-floating">
                                    <div className="box-floating-top">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="box-floating-bottom">
                                        <div className="box-article-content">
                                            <div className="box-title">
                                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing</h4>
                                            </div>
                                            <div className="group">
                                                <div className="btn_border">
                                                    <span className="value">Lorem Ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-bg">
                                    <figure className="box-image">
                                        <img src={img1} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="box box-article">
                                <a href="" className="floating-link"></a>
                                <div className="box-floating">
                                    <div className="box-floating-top">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="box-floating-bottom">
                                        <div className="box-article-content">
                                            <div className="box-title">
                                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing</h4>
                                            </div>
                                            <div className="group">
                                                <div className="btn_border">
                                                    <span className="value">Lorem Ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-bg">
                                    <figure className="box-image">
                                        <img src={img2} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="box box-article">
                                <a href="" className="floating-link"></a>
                                <div className="box-floating">
                                    <div className="box-floating-top">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="box-floating-bottom">
                                        <div className="box-article-content">
                                            <div className="box-title">
                                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing</h4>
                                            </div>
                                            <div className="group">
                                                <div className="btn_border">
                                                    <span className="value">Lorem Ipsum</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-bg">
                                    <figure className="box-image">
                                        <img src={img3} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-180"></div>
            </div>
        </>
    )
}
