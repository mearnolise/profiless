import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import card1 from '../image/card1.jpg'
import card2 from '../image/card2.jpg'
import card3 from '../image/card3.jpg'
import card4 from '../image/card4.jpg'
import card5 from '../image/card5.jpg'

function CardProfiles() {
  return (
    <>
      <div className="page2-title">
        <h1 className="title-text">PICTURE</h1>
      </div>
      <div className="page2-list card">
        <div className="fix-card-swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            className="school-swiper"
          >
            <SwiperSlide>
              <div
                className="card-box"
                style={{ backgroundImage: `url(${card1})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card-box"
                style={{ backgroundImage: `url(${card2})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card-box"
                style={{ backgroundImage: `url(${card3})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card-box"
                style={{ backgroundImage: `url(${card4})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card-box"
                style={{ backgroundImage: `url(${card5})` }}
              ></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default CardProfiles
