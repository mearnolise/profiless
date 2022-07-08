import React from 'react'
import { FaGithub, FaMailBulk, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer className="page2-footer">
        <h2 className="page2-footer-text">For Finding JOB</h2>
        <div>
          <a
            href="https://github.com/mearnolise/profilessss"
            target="noreferrer noopener"
            rel="github"
          >
            <FaGithub className="footer-icons" />
          </a>
          <a
            href="https://github.com/mearnolise/profilessss"
            target="noreferrer noopener"
            rel="github"
          >
            <FaMailBulk className="footer-icons" />
          </a>

          <a
            href="https://www.facebook.com/smart.natthaphat/"
            target="noreferrer noopener"
            rel="facebook"
          >
            <FaFacebook className="footer-icons" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
