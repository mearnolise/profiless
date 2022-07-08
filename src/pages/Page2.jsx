import React from 'react'
import School from '../components/School'
import CardProfiles from '../components/CardProfiles'
import Info from '../components/Info'
import Footer from '../components/Footer'

function Page2() {
  return (
    <div className="page2-container">
      <div className="line"></div>
      <div className="page2-context">
        <div className="page2-info">
          <Info />
        </div>
        <div className="page2-card">
          <CardProfiles />
        </div>
        <div className="page2-school">
          <School />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page2
