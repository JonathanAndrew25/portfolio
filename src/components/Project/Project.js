import React from 'react'
import Projectdisplay from '../Projectdisplay/Projectdisplay';
import { Element } from 'react-scroll';
import Screenshot1 from '../../Projects_pics/Screenshot_1.png'
import Screenshot2 from '../../Projects_pics/Screenshot_2.png'
import Screenshot3 from '../../Projects_pics/Screenshot_3.png'
import Screenshot4 from '../../Projects_pics/Screenshot_4.png'
import Screenshot5 from '../../Projects_pics/Screenshot_5.png'
import Screenshot6 from '../../Projects_pics/Screenshot_6.png'
import Screenshot7 from '../../Projects_pics/Screenshot_7.png'
import Screenshot8 from '../../Projects_pics/Screenshot_8.png'
import './Project.css'

const Project = () => {

    const projects = [
        {
            img: Screenshot1,
            title:"Project_1",
            desc:"Landing Page Created using HTML and CSS",
            link:"www.google.com",
        },
        {
            img: Screenshot2,
            title:"Project_2",
            desc:"Landing Page Created using HTML and CSS",
            link:"www.google.com",
        },
        {
            img: Screenshot3,
            title:"Project_3",
            desc:"Landing Page Created using HTML and CSS",
            link:"www.google.com",
        },
        {
            img: Screenshot4,
            title:"Project_4",
            desc:"Color converter",
            link:"www.google.com",
        },
        {
            img: Screenshot5,
            title:"Project_5",
            desc:"To Do List",
            link:"www.google.com",
        },
        {
            img: Screenshot6,
            title:"Project_6",
            desc:"To Do List",
            link:"www.google.com",
        },
        {
            img: Screenshot7,
            title:"Project_7",
            desc:"To Do List",
            link:"www.google.com",
        },
        {
            img: Screenshot8,
            title:"Project_8",
            desc:"Get Things Done",
            link:"www.google.com",
        },
    ]

  return (
        <Element className="projects" id="projects">
            <h1>Projects</h1>
            <p>Here are some projects which I have done</p>
            <div className='projects__projects'>
                {
                    projects.map((project,index)=>{
                        return(
                            <Projectdisplay 
                            key={index} 
                            img={project.img} 
                            title={project.title} 
                            desc={project.desc} 
                            link={project.link} />
                        )
                    })
                }
            </div>
        </Element>
  )
};

export default Project