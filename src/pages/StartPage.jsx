import face from '../image/face.png'
import { motion } from 'framer-motion'

function StartPage() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  }

  return (
    <>
      <div className="start-page-div">
        <div className="start-page-text">
          <motion.div
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            className="box"
          >
            <h1 className="nickname-text">Smart</h1>
            <h1 className="fullname-text">Natthaphat Srichunhavanich</h1>
          </motion.div>
        </div>
        <div
          className="start-page-div-pic"
          style={{ backgroundImage: `url(${face})` }}
        ></div>
      </div>
    </>
  )
}

export default StartPage
