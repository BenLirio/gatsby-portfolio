import React from 'react';
import { Layout, SEO } from 'components/common';
import { TechStack, Intro, Skills, Contact, GitHub, Projects} from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <GitHub />
    <TechStack />
    <Skills />
    <Contact />
  </Layout>
);
