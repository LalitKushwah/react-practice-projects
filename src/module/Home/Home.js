import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../assets/data/data';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

const Home = () => {
    return (
        <Container>
            <HomeContainer>
                <h1>Congratulations, You are half way done</h1>
                <Link to="/projects">Projects</Link>
            </HomeContainer>
        </Container>
    )
}

const renderProjects = (projects) => {
    return (
        projects.map(project => {
            return <Link to={`/projects/basic/${project.id}`}>{project.name}</Link>
        }
        ))
}

const HomeContainer = styled.div`
    text-align: center;
`

export default Home;