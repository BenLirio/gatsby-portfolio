import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, GitHub, Projects} from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <GitHub />
    <Skills />
    <Contact />
  </Layout>
);
