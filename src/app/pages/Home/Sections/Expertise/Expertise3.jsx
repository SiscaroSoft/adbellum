import img from '@/assets/images/luz-led.png'

export const Expertise3 = () => {
    return (
        <>
            <div className="section">
                <div className="expertise-3">
                    <h2 className="expertise-3-title">
                        Lorem ipsum dolor sit <br />
                        <span>amet consectetur elit</span>
                    </h2>

                    <div className="expertise-3_grid">
                        <div className="grid-3">
                            <div className="match--img">
                                <img src={img} alt="" />
                            </div>
                            <h4 className="text--purple">Lorem ipsum dolor sit</h4>
                            <p className="long">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione voluptatibus? Modi
                                aspernatur temporibus vel similique ut quisquam officiis deleniti, odio delectus iste
                                accusantium nisi!
                            </p>
                        </div>
                        <div className="grid-3">
                            <div className="match--img">
                                <img src={img} alt="" />
                            </div>
                            <h4 className="text--purple">Lorem ipsum dolor sit</h4>
                            <p className="long">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione voluptatibus? Modi
                                aspernatur temporibus vel similique ut quisquam officiis deleniti, odio delectus iste
                                accusantium nisi!
                            </p>
                        </div>

                        <div className="grid-3">
                            <div className="match--img">
                                <img src={img} alt="" />
                            </div>
                            <h4 className="text--purple">Lorem ipsum dolor sit</h4>
                            <p className="long">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione voluptatibus? Modi
                                aspernatur temporibus vel similique ut quisquam officiis deleniti, odio delectus iste
                                accusantium nisi!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
