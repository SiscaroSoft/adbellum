import img1 from '@/assets/images/image2.jpg'
import img2 from '@/assets/images/image3.jpg'
import img3 from '@/assets/images/image.jpg'

export const Expertise2 = () => {
    return (
        <div className="section" style={{ backgroundColor: 'rgb(255, 255, 248)' }}>
            <div className="expertise2">
                <h2>
                    Lorem ipsum dolor <br />
                    sit amet consectetur adipisicing
                    <br />
                    elit. Qui, ratione.
                </h2>
            </div>

            <div className="expertise2_carousel">
                <div className="expertise2_grid">
                    <div className="expertise2_col1">
                        <figure className="expertise2_figure">
                            <div></div>
                            <img src={img1} alt="" />
                        </figure>
                    </div>
                    <div className="expertise2_col1 right">
                        <h3>Lorem ipsum dolor</h3>
                        <div className="expertise2_txt">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione voluptatibus? Modi
                                aspernatur temporibus vel similique ut quisquam officiis deleniti, odio delectus iste
                                accusantium nisi neque a dolores officia omnis! Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, ratione voluptatibus? Modi aspernatur temporibus vel similique ut
                                quisquam of omnis!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="expertise2_grid">
                    <div className="expertise2_col1 order2">
                        <figure className="expertise2_figure">
                            <div></div>
                            <img src={img2} alt="" />
                        </figure>
                    </div>
                    <div className="expertise2_col1 right">
                        <h3>Lorem ipsum dolor</h3>
                        <div className="expertise2_txt">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione voluptatibus? Modi
                                aspernatur temporibus vel similique ut quisquam officiis deleniti, odio delectus iste
                                accusantium nisi neque a dolores officia omnis! Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, ratione voluptatibus? Modi aspernatur temporibus vel similique ut
                                quisquam of omnis!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="expertise2_grid">
                    <div className="expertise2_col1">
                        <figure className="expertise2_figure">
                            <div></div>
                            <img src={img3} alt="" />
                        </figure>
                    </div>
                    <div className="expertise2_col1 right">
                        <h3>Lorem ipsum dolor</h3>
                        <div className="expertise2_txt">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione voluptatibus? Modi
                                aspernatur temporibus vel similique ut quisquam officiis deleniti, odio delectus iste
                                accusantium nisi neque a dolores officia omnis! Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, ratione voluptatibus? Modi aspernatur temporibus vel similique ut
                                quisquam of omnis!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
