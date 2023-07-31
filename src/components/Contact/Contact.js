import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import { Facebook,Instagram,LinkedIn } from "@mui/icons-material";

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <a href="mailto:mjonathanandrew2001@gmail.com" target='_blank'><span>mjonathanandrew2001@gmail.com</span></a>
            </p>
            <p>
                Github Username : <a href='https://github.com/JonathanAndrew25' target='_blank'><span>@JonathanAndrew25</span></a>
            </p>
            <div className='contact__icons'>
                <a href='https://www.linkedin.com/in/mjonathan-andrew' target='_blank'>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
                <a href='https://www.facebook.com/Andrew.Don.007' target='_blank'>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                </a>
                <a href='https://instagram.com/t.h.e__m.a.g.i.c.i.a.n' target='_blank'>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact