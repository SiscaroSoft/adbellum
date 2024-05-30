import './Hero.css'
import img3 from '@/assets/images/image3.jpg'
export const Hero1 = () => {
    return (
        <>
            <div className="section">
                <div className="o-container is-wide is-hero">
                    <div className="hero_grid">
                        <div className="hero_text-wrapper">
                            <h2 className="text-size-h5">
                                <span>Lorem ipsum, dolor, sit amet consectetur.</span>
                            </h2>
                        </div>

                        <h1 className="grid-area text-size-display">
                            <span>Lorem ipsum dolor sit amet</span>
                        </h1>
                    </div>

                    <div className="space-180"></div>

                    <div className="home_reel-wrapper is-bottom">
                        <div className="home_reel-container">
                            <div className="home_reel-background">
                                <div className="home_reel-video">
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
