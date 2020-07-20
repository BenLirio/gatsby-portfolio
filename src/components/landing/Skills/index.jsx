import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
           The same way some people rely on coffee in the morning, I rely on Spellcheck and Grammarly when I write. Assistive software like these has saved me and countless other many hours. 
          </p>
          <p>
            Knowing that a single software invention can positively impact millions or even billions of people has inspired me to strive to be the best I can in my field.
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
