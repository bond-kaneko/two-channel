import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardIndex from './pages/BoardIndex';
import ThreadIndex from './pages/ThreadIndex';
import ThreadDetail from './pages/ThreadDetail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/board">
                    <BoardIndex />
                </Route>
                <Route path="/thread/detail">
                    <ThreadDetail />
                </Route>
                <Route path="/thread">
                    <ThreadIndex />
                </Route>
                <Route path="/">
                    <BoardIndex />
                </Route>
            </Switch>
        </Router>
    );
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
