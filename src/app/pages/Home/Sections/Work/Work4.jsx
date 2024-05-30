import img1 from '@/assets/images/image.jpg'
import img2 from '@/assets/images/image2.jpg'
import img3 from '@/assets/images/image3.jpg'

export const Work4 = () => {
    return (
        <div className="section_work4">
            <div className="section_work4-container">
                <div className="section_work4-content">
                    <article className="section_work4-item">
                        <picture className="section_work4-picture">
                            <img src={img1} alt="" />
                            <ul className="section_work4-ul">
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                <li>Amet Sit</li>
                            </ul>
                        </picture>
                        <h6>Lorem ipsum dolor amet sit</h6>
                    </article>

                    <article className="section_work4-item">
                        <picture className="section_work4-picture">
                            <img src={img2} alt="" />
                            <ul className="section_work4-ul">
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                <li>Amet Sit</li>
                            </ul>
                        </picture>
                        <h6>Lorem ipsum dolor amet sit</h6>
                    </article>

                    <article className="section_work4-item">
                        <picture className="section_work4-picture">
                            <img src={img3} alt="" />
                            <ul className="section_work4-ul">
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                <li>Amet Sit</li>
                            </ul>
                        </picture>

                        <h6>Lorem ipsum dolor amet sit</h6>
                    </article>
                </div>
            </div>
        </div>
    )
}
