import img3 from '@/assets/images/image3.jpg'
export const Hero7 = () => {
    return (
        <div className="section">
            <div className="hero7">
                <div className="hero7-wrapper">
                    <div className="hero7-color"></div>
                    <div className="hero7-image">
                        <img src={img3} alt="" />
                    </div>
                    <div className="hero7-container">
                        <div className="hero7-container-layout">
                            <div className="hero7-txt">
                                <h2>Lorem ipsum</h2>
                                <div className="hero7-heading">
                                    <h3>
                                        Lorem ipsum <span>amet</span> amet
                                    </h3>
                                </div>
                            </div>
                            <div className="hero7-txt-info">
                                <div className="hero7-txt-info-layout">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a, harum
                                        suscipit nobis quidem, ducimus placeat, iste quisquam asperiores soluta amet
                                        deleniti quia aliquid eius beatae hic id accusamus debitis!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
