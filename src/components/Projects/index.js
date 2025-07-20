import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
         As a cybersecurity expert and software developer, I have built and contributed to numerous projects across various domains. From developing secure web applications to creating automation tools, my work reflects my passion for safeguarding digital systems. Here are some of my significant projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Cybersecurity Projects' ?
            <ToggleButton active value="Cybersecurity Projects" onClick={() => setToggle('web app')}>CYBERSECURITY PROJECT'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('Cybersecurity Projects')}>CYBERSECURITY PROJECT'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Web Applications' ?
            <ToggleButton active value="Web Applications" onClick={() => setToggle('Web Applications')}>WEB APPLICATION'S</ToggleButton>
            :
            <ToggleButton value="Web Applications" onClick={() => setToggle('Web Applications')}>WEB APPLICATION'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Forensic Analysis ' ?
            <ToggleButton active value="Forensic Analysis " onClick={() => setToggle('Forensic Analysis ')}>FORENSIC ANALYSIS</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('Forensic Analysis ')}>FORENSIC ANALYSIS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects