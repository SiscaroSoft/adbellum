import img3 from '@/assets/images/image3.jpg'
export const Hero4 = () => {
    return (
        <div className="section_hero4">
            <div className="section_hero4-inner">
                <div className="section_hero4-block">
                    <div className="section_hero4-block-inner">
                        <div className="section_hero4-block-heading">
                            <div className="section_hero4-block-text">
                                <h4>
                                    Lorem ipsum <em>Dolor</em>
                                </h4>
                            </div>
                        </div>

                        <h5 className="section_hero4-block-left">
                            Lorem ipsum dolor sit amet, <br />
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum libero.
                        </h5>
                    </div>
                </div>
            </div>

            <div className="page_hero-picture">
                <div className="page_hero-picture-content">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    )
}
