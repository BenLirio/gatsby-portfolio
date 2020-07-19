import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Preview, BrowserBar } from './styles';
import browserBar from '../../../assets/illustrations/browserBar.svg'

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      name: 'project 1',
      url: 'google.com',
      description: 'asdf',
      stargazers: {
        totalCount: 3
      },
      forkCount: 3
    }
  ]
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {projects.map((project) => (
          <Item key={project.name} as="a" href={project.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </Content>
              <BrowserBar />
              <Preview as="iframe" allowfullscreen={true} src="https://benlirio.github.io/fiction-client/#/"></Preview>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{project.stargazers.totalCount}</span>
                </div>
                <div>
                  <Fork color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{project.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
