import React, { useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/virtual'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'

function GradeComponent({ image, title }) {
  const slides = Array.from({ length: 2 }).map(
    (el, index) => `Slide ${index + 1}`
  )

  const [isClick, setIsClick] = useState(false)

  return (
    <>
      <div className="grade-box">
        <h1 className="grade-text">{title}</h1>
        {isClick ? (
          <FaArrowDown
            className="grade-button"
            onClick={() => setIsClick(!isClick)}
          />
        ) : (
          <FaArrowRight
            className="grade-button"
            onClick={() => setIsClick(!isClick)}
          />
        )}
      </div>

      {isClick && (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
          slidesPerView={1}
          className="grade-swiper"
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <div className="grade-pic">
                <Zoom>
                  <img
                    src={image[index]}
                    alt="paper"
                    className="grade-image"
                  ></img>
                </Zoom>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      )}
    </>
  )
}

export default GradeComponent
