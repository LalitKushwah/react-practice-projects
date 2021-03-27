import React, { useState } from 'react';
import { Container, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import data from './data';

const useStyle = makeStyles(() => ({
    bg: {
        backgroundColor: 'pink',
    }
}))

const BirthdayReminder = () => {
    const classes = useStyle();
    const [isWished, setIsWished] = useState(false);

    return (
        <Container maxWidth="sm" style={{ backgroundColor: 'lightpink' }}>
            <Card className={classes.bg}>
                {
                    !isWished ? (
                        <CardContent>
                            <List>
                                {
                                    data.map(item => {
                                        return (
                                            getListItem(item.image, item.name, item.age)
                                        )
                                    })
                                }
                            </List>
                            <div style={{ textAlign: 'right' }}>
                                <Button variant="contained" color="primary" onClick={() => setIsWished(!isWished)}>
                                    Wish Them
                            </Button>
                            </div>
                        </CardContent>
                    ) : <CardContent>You Made their Day :)</CardContent>
                }
            </Card>
        </Container>
    )
}

const getListItem = (image, primaryText, secondaryText) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={image}>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primaryText} secondary={secondaryText} />
        </ListItem>
    )
}

export default BirthdayReminder;