import React from 'react'

const Cta = () => {
  return (
    <div className="cta">
        <span>
        Need a <span className="highlight">expert team</span> <br /> on your next
        project? <br /> Let's talk.
        </span>
        <Link to="/contact" className="button link cta__button">
            Get in touch
            <IoMdArrowForward />
        </Link>
    </div>
  )
}

export default Cta
