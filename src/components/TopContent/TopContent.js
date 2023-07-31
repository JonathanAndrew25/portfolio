import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
        <h1>Mr. Jonathan Andrew</h1>
        <p>A Professional Web and App Developer</p>
        <a href='https://drive.google.com/file/d/1ts96QS-zmrzukn0WUwW2Tx-EjV998FLR/view?usp=drive_link' target='_blank'>
            <button className='topcontent__downloadbutton'>Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
            <button className='topcontent__workbutton'>My Work</button>
        </Link>
        </div>
    </div>
  )
}

export default TopContent