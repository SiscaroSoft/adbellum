import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Pagination } from 'swiper/modules'

import img1 from '@/assets/images/image.jpg'
import img2 from '@/assets/images/image2.jpg'
import img3 from '@/assets/images/image3.jpg'

export const Hero6 = () => {
    return (
        <div className="hero6">
            <div className="hero6_content">
                <div className="hero6_group">
                    <div className="hero6_group-inner">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum hic sed laudantiu!</h2>
                    </div>
                </div>

                <div className="hero6_colgroup">
                    <div className="hero6_colgroup-content">
                        <div className="hero6_colgroup-inner">
                            <div className="hero6_colgroup-button">
                                <div className="hero6_colgroup-button-content">
                                    <div className="hero6_colgroup-button-wrap">
                                        <a href="">
                                            <span>Mira nuestros cursos ahora</span>
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g strokelinecap="round" strokeLinejoin="round"></g>
                                                <g>
                                                    <path
                                                        d="M6 12H18M18 12L13 7M18 12L13 17"
                                                        stroke="#ffffff"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hero6_colgroup-module">
                                <div className="hero6_colgroup-module-content image-team">
                                    <div>
                                        <Swiper
                                            loop={true}
                                            loopAdditionalSlides={2}
                                            spaceBetween={30}
                                            slidesPerView={'auto'}
                                            allowTouchMove={false}
                                            autoplay={{
                                                delay: 0,
                                                disableOnInteraction: false,
                                            }}
                                            speed={'8000'}
                                            modules={[Autoplay]}>
                                            {' '}
                                            <SwiperSlide>
                                                <img src={img1} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img2} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img3} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img1} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img2} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img3} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img1} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img2} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img3} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img1} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img2} alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={img3} alt="" />
                                            </SwiperSlide>
                                        </Swiper>
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
