import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Preview, BrowserBar } from './styles';
import browserBar from '../../../assets/illustrations/browserBar.svg'
import Modal from 'react-modal'
import { useState } from 'react';
import './modalStyles.css'
import { createContext } from 'react';
import close from '../../../assets/icons/close-24px.svg'
const ModalContext = createContext()
const ProjectModal= ({ title, children }) => {
  const [modal, requestClose] = useContext(ModalContext)
  return (
    <Modal
      isOpen={modal === title}
      onRequestClose={requestClose}
  >
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>{title}</h2>
        <img src={close} onClick={requestClose}></img>
    </div>
      {children}
    </Modal>
  )
}
export const Projects = () => {
  const [modal, setModal] = useState(null)
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      title: "Relay Resource",
      description: "COVID-19 resource - Tips and advice"
    },
    {
      title: 'Fiction Writter',
      description: 'Write down your thoughts. Use Natural Language Processing to generate new ideas when you run out',
    },
    {
      title: "Healthy Smile",
      description: "Business website for a Dentist"
    },
  ]
  const openProject = (project) => {
    setModal(project)
  }
  const closeProject = () => {
    setModal(null)
  }
  return (
    <Wrapper as={Container} id="projects">
      <ModalContext.Provider value={[modal, closeProject]}>
        <h2>Live View</h2>
        <ProjectModal title="Relay Resource">
          <Preview as="iframe" allowfullscreen={true} src="https://relay-resource.web.app" />
        </ProjectModal>
        <ProjectModal title="Fiction Writter">
          <Preview as="iframe" allowfullscreen={true} src="https://benlirio.github.io/fiction-client/#/"></Preview>
        </ProjectModal>
        <ProjectModal title="Healthy Smile">
          <Preview as="iframe" allowfullscreen={true} src="https://onahealthysmile.com/cosmetic" />
        </ProjectModal>
        <Grid>
          {projects.map((project) => (
            <Item key={project.title} onClick={() => openProject(project.title)} theme={theme}>
              <Card theme={theme}>
                <Content>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </Content>
              </Card>
            </Item>
          ))}
        </Grid>
      </ModalContext.Provider>
    </Wrapper>
  );
};
