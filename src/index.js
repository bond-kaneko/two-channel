import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Board extends React.Component {

    render() {
        return (
            <h1>掲示板一覧</h1>
        );
    }
}


class Thread extends React.Component {
    render() {
        return (
            <h1>スレ一覧</h1>
        );
    }
}

class ThreadDetail extends React.Component {
    render() {
        return (
            <h1>スレ詳細</h1>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/board">
                        <Board />
                    </Route>
                    <Route path="/thread/detail">
                        <ThreadDetail />
                    </Route>
                    <Route path="/thread">
                        <Thread />
                    </Route>
                    <Route path="/">
                        <Board />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
