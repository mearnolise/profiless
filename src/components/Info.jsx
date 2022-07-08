import React from 'react'
import face from '../image/face2.jpg'

function Info() {
  return (
    <>
      <div className="page2-title">
        <h1 className="title-text">MY INFO</h1>
      </div>
      <div className="page2-list info">
        <div className="info-div">
          <div
            className="info-pic"
            style={{ backgroundImage: `url(${face})` }}
          ></div>
          <div className="info-text">
            <h1 className="info-title">About Me</h1>
            <p className="info-small-text">
              ผมชื่อ <mark>ณัฐภัทร ศรีชุณหวณิช (สมาร์ท)</mark> ครับ
            </p>
            <p className="info-small-text">
              ผมเป็นคนง่ายๆ เข้ากับคนอื่นง่าย
              ถึงจะไม่เก่งมากแต่พร้อมเรียนรู้สิ่งใหม่ๆเสมอ
            </p>
            <ul>
              <li>
                <span>Date of birth:</span>
                <span className="text-color-info">10 MAR. 1999.</span>
              </li>
              <li>
                <span>Address:</span>
                <span className="text-color-info">
                  244/388 ซอยวิภาวดีรังสิต 43 แขวง สนามบิน เขต ดอนเมือง กรุงเทพ
                </span>
              </li>
              <li>
                <span>Zip code:</span>
                <span className="text-color-info">10210</span>
              </li>
              <li>
                <span>Email:</span>
                <span className="text-color-info">smart03941@gmail.com</span>
              </li>
              <li>
                <span>Phone:</span>
                <span className="text-color-info">091-145-4539</span>
              </li>
              <li>
                <span>Skill:</span>
                <span className="text-color-info">
                  Python, css, javascript, html, react
                </span>
              </li>
              <li>
                <span>Hobby:</span>
                <span className="text-color-info">
                  GAME, MOVIE, MANGA, Anime
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Info
