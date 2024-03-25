import React from 'react'
import IMG1 from '../Images/Business-Page1/teamwork-3213924.jpg';
import IMG2 from '../Images/Page2-Art/main.jpg';
import IMG3 from '../Images/Earth-Page3/australia-4242493_1920.jpg';
import IMG4 from '../Images/Page4-Food/strawberries-7391738_1920.jpg';
import IMG5 from '../Images/Page5-Photography/belgium-7826588_1920.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

function Home() {
    return (
        <>
            {/* HOME */}
            <section className='Home-Section' data-aos="zoom-in">
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    direction='vertical'
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{
                        backgroundImage: `url(${IMG1})`,
                        maxWidth: '100%',
                        maxHeight: '766px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}></SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url(${IMG2})`,
                        maxWidth: '100%',
                        maxHeight: '766px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}></SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url(${IMG3})`,
                        maxWidth: '100%',
                        maxHeight: '766px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}></SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url(${IMG4})`,
                        maxWidth: '100%',
                        maxHeight: '766px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}></SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url(${IMG5})`,
                        maxWidth: '100%',
                        maxHeight: '766px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}></SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Home
