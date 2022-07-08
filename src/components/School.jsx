import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import Schools from './school/Schools'

function School() {
  return (
    <>
      <div className="page2-title">
        <h1 className="title-text">SCHOOL</h1>
      </div>
      <div className="page2-list school">
        <div className="fix-school-swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            slidesPerView={3}
            loop={true}
            className="school-swiper"
          >
            <SwiperSlide>
              <Schools
                name="Faculty of computer engineering : kasetsart University"
                gpa="GPA : 2.26"
                img="http://himpun.org/wp-content/uploads/2021/12/S__4825095.jpg"
                logo="https://upload.wikimedia.org/wikipedia/commons/9/97/KU_Logo.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Schools
                img="https://khaemodtanoy.weebly.com/uploads/4/4/6/2/44622851/9630568_orig.jpg"
                logo="https://upload.wikimedia.org/wikipedia/en/1/1b/Suankularb_Wittayalai_School_logo.png"
                name="Mathematics Science : Suankularb Wittayalai Nonthaburi  School"
                gpa="GPA : 3.84 , GPA : 3.77"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Schools
                img="http://www.geocities.ws/naratcha/image/2129225.jpg"
                name="ST.Francis Xavier School"
                gpa="GPA : x.xx"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default School
