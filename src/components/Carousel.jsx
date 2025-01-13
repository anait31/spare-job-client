// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/carousel1.webp'
import bgimg2 from '../assets/images/carousel2.jpeg'
import bgimg3 from '../assets/images/carousel3.webp'

export default function Carousel() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Crowdsource your Micro Jobs'
            description='VCode generation Auto Submission to MW'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Get Started Right Away with Easy-to-Customize Templates'
            description='Predefined Answers Required/Not-required questions'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Multiple, Continuous Jobs'
            description='DoTask again'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
