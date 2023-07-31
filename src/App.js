import React from 'react'
import Header from './components/Header/Header'
import TopContainer from './components/TopContainer/TopContainer'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import './App.css'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <Skills />
      <Project />
      <ExperienceContainer />
      <Contact />
    </div>
  )
}

export default App