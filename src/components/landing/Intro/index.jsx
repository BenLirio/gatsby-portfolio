import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  const { imageSharp }= useStaticQuery(graphql`
    query {
      imageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        } 
      }
    }
  `)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Ben Lirio and I’m a Software engineer!</h4>
          <Button as={AnchorLink} href="#contact">
           Contact 
          </Button>
        </Details>
        <Thumbnail>
          <Img style={{borderRadius: '50%'}} fluid={imageSharp.fluid}></Img>
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
