import React from 'react'
import { Element } from "react-scroll";
import skillimg from "../../Pics/skills.webp";
import LinearProgress from "@mui/material/LinearProgress"
import "./Skills.css"

const Skills = () => {
  return (
    <Element className='skill' id='skills'>
        <div className='skill__image'>
        <img src={skillimg} alt='' />
        </div>
        <div className='skill__text'>
            <h2>SKILL SET</h2>
            <div className='skill__skillset'>
                <h5>React</h5>
                <div className='skill__slider skill__slider1'>
                <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='skill__skillset'>
                <h5>Node JS</h5>
                <div className='skill__slider skill__slider2'>
                <LinearProgress variant='determinate' value={75} />
                </div>
            </div>
            <div className='skill__skillset'>
                <h5>React Native</h5>
                <div className='skill__slider skill__slider3'>
                <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='skill__skillset'>
                <h5>Docker</h5>
                <div className='skill__slider skill__slider4'>
                <LinearProgress variant='determinate' value={70} />
                </div>
            </div>
            <div className='skill__skillset'>
                <h5>GraphQL</h5>
                <div className='skill__slider skill__slider5'>
                <LinearProgress variant='determinate' value={50} />
                </div>
            </div>
            <div className='skill__skillset'>
                <h5>AWS</h5>
                <div className='skill__slider skill__slider6'>
                <LinearProgress variant='determinate' value={60} />
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skills