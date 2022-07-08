import React from 'react'
import { useNavigate } from 'react-router-dom'
function School1({ name, img, logo, gpa }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="school-profile green">
        <div
          className="school-pic"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <img className="school-logo" src={logo} alt="logo"></img>
        <h1 className="school-text">{name}</h1>
        <h1 className="school-text" style={{ fontSize: '20px' }}>
          {gpa}
        </h1>
        <h2 className="more-button" onClick={() => navigate('./grade')}>
          Read More
        </h2>
      </div>
    </>
  )
}

export default School1
