import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../../assets/data/data';
import { ListItem, List, ListItemText } from '@material-ui/core';

const Basic = () => {
    return (
        <>
            <h1>Basic Project</h1>
            <List component="nav" aria-label="secondary mailbox folders">
                {
                    projects.filter(item => item.type === 'Basic').map(project => {
                        return project.metaData.map(item => {
                            return (
                                <ListItem button>
                                    <Link to={`/projects/basic/${item.id}`}><ListItemText primary={item.name} /></Link>
                                </ListItem>
                            )
                        })
                    })
                }

            </List>
        </>
    )
}
export default Basic;