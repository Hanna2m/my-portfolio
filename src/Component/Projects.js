import React from 'react'
import ProjectItem from './project_item'
import { Typography } from '@mui/material';
import cover1 from './image/cover.1.png'
import cover2 from './image/cover2.png'

export default function Projects() {
  return (
    <>
      <Typography style={{textAlign:'center' }} variant="h4">PROJECTS</Typography>
      <ProjectItem 
        name='What is my IP'
        icon={cover1}
        description='Service for locating IP address and providing additional information about the country,
        such as capital, currency, language, population etc. 
        Project is developed with React.
        Used technologies: JavaScript, React, React Hooks, Axios'
        link='https://github.com/Hanna2m/what-is-my-ip.git'
      />
      <ProjectItem 
        name='Meme-generator'
        icon={cover2}
        description='Service for generating memes. You can use random image from the internet
        or upload your own, write your caption und download result.
        Used technologies: JavaScript, React, React Hooks, Axios, CSS'
        link='https://github.com/Hanna2m/what-is-my-ip.git'
      />
    </>
  )
}
