import React from 'react'
import { Container } from 'reactstrap';
import { Switch, Route, BrowserRouter, Redirect, useRouteMatch } from 'react-router-dom';
import AddPhoto from './Add';

function Photo() {
    const match = useRouteMatch();

    return (
        <Container>
            <a href="/photos/add">Add photo</a>
            <Switch>
                <Route exact path={match.url} />
                <Route exact path="/photos/add" component={AddPhoto} />
            </Switch>
        </Container>
    )
}

export default Photo;