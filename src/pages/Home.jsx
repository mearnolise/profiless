import { useState, useRef, useEffect } from 'react'
import StartPage from './StartPage'
import Page2 from './Page2'

function Home() {
  const [sectionnum, setSectionnum] = useState(1)
  const [count, setcount] = useState(0)

  const myRef = useRef(null)
  const activeSlideRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (entry.isIntersecting === true) {
        setTimeout(() => {
          setSectionnum(2)
        }, 200)
      }
    })
    observer.observe(myRef.current)
  }, [])

  const handleScroll = (event) => {
    if (sectionnum === 2) {
      if (event.currentTarget.scrollTop === 0) {
        setcount(count + 1)
        if (count >= 1) {
          setTimeout(setSectionnum(1), 500)
        }
      }
      if (event.currentTarget.scrollTop > 20) {
        setcount(0)
      }
    }
  }

  return (
    <div className="container">
      <div
        ref={activeSlideRef}
        className="home1-container"
        onScroll={handleScroll}
      >
        {sectionnum === 1 ? (
          <section className="xxx" id={1}>
            <StartPage />
          </section>
        ) : (
          <></>
        )}
        <section className="yyy" ref={myRef} id={2}>
          <Page2 />
        </section>
      </div>
    </div>
  )
}
export default Home
