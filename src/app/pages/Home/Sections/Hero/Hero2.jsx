import img3 from '@/assets/images/image3.jpg'
export const Hero2 = () => {
    return (
        <>
            <div className="page_hero">
                <div className="page_hero-bd">
                    <div className="page_hero-ready">
                        <h1 className="page_hero-heading">Adbellum For</h1>
                        <div className="page_hero-leader">
                            <p>Lorem ipsum, dolor, sit 75% consectetur.</p>

                            <div className="site-grid">
                                <a href="" className="button  is-dark is-hero">
                                    <div className="nav_text-wrapt">Vamos</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page_hero-picture">
                    <div className="page_hero-picture-content">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
