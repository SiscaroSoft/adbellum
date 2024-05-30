import img3 from '@/assets/images/image4.jpg'

export const About4 = () => {
    return (
        <div className="section_about4">
            <div className="section_about4-container">
                <div className="section_about4-inner">
                    <h3>Lorem ipsum</h3>
                    <h4>Lorem</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas in doloribus, eos
                        quidem incidunt distinctio eum id, possimus eveniet impedit atque odit nihil magnam debitis
                        ipsum officiis. Omnis, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente voluptas in doloribus, eos quidem incidunt distinctio eum id, possimus eveniet impedit
                        atque odit nihil magnam debitis ipsum officiis. Omnis, consectetur.
                    </p>
                </div>
                <picture className="section_about4-picture">
                    <img src={img3} alt="" />
                </picture>
            </div>
        </div>
    )
}
