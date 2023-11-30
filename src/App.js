// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AdminPage from './AdminPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/admin" exact component={AdminPage} />
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;
