import img1 from '@/assets/images/image2.jpg'
import img2 from '@/assets/images/image3.jpg'
import img3 from '@/assets/images/image4.jpg'

export const Expertise5 = () => {
    return (
        <div className="section">
            <div className="expertise5">
                <div className="pin-spacer">
                    <div className="expertise5-grid-image">
                        <div></div>
                        <picture>
                            <img src={img1} alt="" />
                        </picture>
                    </div>
                </div>

                <div className="expertise5-grid">
                    <div className="expertise5-product">
                        <h5>
                            Lorem ipsum
                            <br /> dolor sit amet
                        </h5>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam odio fugit quod tenetur
                            dolore excepturi! Quae quis a, dolore esse natus ipsam placeat et. Necessitatibus modi eos
                            commodi excepturi nulla!
                        </p>

                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
