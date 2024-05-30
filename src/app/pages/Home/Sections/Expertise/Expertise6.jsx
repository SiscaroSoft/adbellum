import img3 from '@/assets/images/image3.jpg'
export const Expertise6 = () => {
    return (
        <div className="section">
            <div className="expertise6">
                <div className="expertise6-inner">
                    <div className="expertise6-wrap">
                        <div className="expertise6-grid-row">
                            <div className="expertise6-grid-col expertise6-col-12">
                                <div className="expertise6-accordion">
                                    <div className="expertise6-accordion-item">
                                        <div className="expertise6-accordion-header">
                                            <span className="expertise6-accordion-icon">1</span>
                                            <span className="expertise6-accordion-title">Lorem ipsum dolor sit</span>
                                            <div className="expertise6-accordion-btn"></div>
                                        </div>

                                        <div
                                            className="expertise6-accordion-content"
                                            style={{ height: '608px', opacity: '1' }}>
                                            <div className="expertise6-accordion-inner">
                                                <div className="expertise6-accordion-grid">
                                                    <div className="expertise6-accordion-col-1">
                                                        <h4>
                                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                                                            dolor accusamus
                                                        </h4>
                                                        <ul>
                                                            <li>Lorem ipsum dolor</li>
                                                            <li>sit amet consectetur adipisicing</li>
                                                            <li>elit. Ea dolor</li>
                                                            <li>Lorem, ipsum dolor sit amet</li>
                                                            <li>odit maiores placeat adipisci? Architecto</li>
                                                            <li>repudiandae perferendis sequi velit aperiam</li>
                                                        </ul>
                                                    </div>
                                                    <div className="expertise6-accordion-col-2">
                                                        <p>
                                                            <img src={img3} alt="" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="expertise6-accordion-item">
                                        <div className="expertise6-accordion-header">
                                            <span className="expertise6-accordion-icon">2</span>
                                            <span className="expertise6-accordion-title">Lorem ipsum dolor sit</span>
                                            <div className="expertise6-accordion-btn"></div>
                                        </div>
                                    </div>

                                    <div className="expertise6-accordion-item">
                                        <div className="expertise6-accordion-header">
                                            <span className="expertise6-accordion-icon">3</span>
                                            <span className="expertise6-accordion-title">Lorem ipsum dolor sit</span>
                                            <div className="expertise6-accordion-btn"></div>
                                        </div>
                                    </div>

                                    <div className="expertise6-accordion-item">
                                        <div className="expertise6-accordion-header">
                                            <span className="expertise6-accordion-icon">4</span>
                                            <span className="expertise6-accordion-title">Lorem ipsum dolor sit</span>
                                            <div className="expertise6-accordion-btn"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
