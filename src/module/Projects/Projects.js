import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import BasicProject from './Basic/Basic';
import BasicDetailProject from './Basic/BasicDetail';




const Projects = ({ projectTypes }) => {
    return (
        <Container>
            <StyledDiv>
                <ul>
                    <li>
                        <Link to="/projects/basic">Basic</Link>
                    </li>
                    <li>
                        <Link to="/projects/advanced">Advanced</Link>
                    </li>
                </ul>
            </StyledDiv>
            {registerChildRoutes()}
        </Container>

    );
}

const registerChildRoutes = () => {
    return (
        <Switch>
            <Route path="/projects/basic" component={BasicProject} exact></Route>
            <Route path="/projects/basic/:id" component={BasicDetailProject}></Route>
            <Route path="/projects/advanced"></Route>
        </Switch>
    )
}

const StyledDiv = styled.div`
    text-align: center;   
`

export default Projects;