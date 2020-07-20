import React, { useContext } from 'react';
import docker from '../../../assets/icons/tech/docker.svg'
import firebase from '../../../assets/icons/tech/firebase.svg'
import express from '../../../assets/icons/tech/express.svg'
import googleCloud from '../../../assets/icons/tech/google-cloud.svg'
import javascript from '../../../assets/icons/tech/javascript.svg'
import jupyter from '../../../assets/icons/tech/jupyter.svg'
import materialUI from '../../../assets/icons/tech/material-ui.svg'
import mysql from '../../../assets/icons/tech/mysql.svg'
import nodejs from '../../../assets/icons/tech/nodejs.svg'
import python from '../../../assets/icons/tech/python.svg'
import react from '../../../assets/icons/tech/react.svg'
import wordpress from '../../../assets/icons/tech/wordpress.svg'
import { Wrapper, TechnologyWrapper, TechnologySvg } from './styles';


const Technology = ({ icon, name }) => {
  return (
    <TechnologyWrapper>
      <TechnologySvg as="img" src={icon}></TechnologySvg>
      <h4>{name}</h4>
    </TechnologyWrapper>
  )
}

export const TechStack = () => {
  return (
    <>
      <Wrapper>
        <Technology icon={docker} name='Docker'/>
        <Technology icon={firebase} name='Firebase'/>
        <Technology icon={express} name='Express'/>
        <Technology icon={googleCloud} name='Google Cloud'/>
        <Technology icon={javascript} name='JavaScript'/>
        <Technology icon={jupyter} name='Jupyter'/>
        <Technology icon={materialUI} name='Material UI'/>
        <Technology icon={nodejs} name='nodejs'/>
        <Technology icon={mysql} name='mysql'/>
        <Technology icon={python} name='python'/>
        <Technology icon={react} name='react'/>
        <Technology icon={wordpress} name='wordpress'/>
      </Wrapper>
    </>
  );
};
