import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import BasicProject from './Basic/Basic';
import BasicDetailProject from './Basic/BasicDetail';
import logo from '../../logo.svg';
import { FaBars } from 'react-icons/fa'

const Projects = ({ projectTypes }) => {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>
                    <button className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
                <div className="links-container show-container">
                    <ul className="links">
                        <li>
                            <Link to="/projects/basic">Basic</Link>
                        </li>
                        <li>
                            <Link to="/projects/advanced">Advanced</Link>
                        </li>
                    </ul>
                </div>
                <ul className="social-icons">

                </ul>
            </div>
            { registerChildRoutes()}
        </nav>

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

export default Projects;