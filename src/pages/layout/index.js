import React, {Component} from 'react';
import RouteApp from '../route'
import {ConnectedRouter} from 'react-router-redux'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class App extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route path='/' render={() => {
                        return (
                                <div>
                                    <RouteApp/>
                                </div>
                        )
                    }}/>
                    <Redirect to='/'/>
                </Switch>
            </Router>

        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, (null, dispatch => bindActionCreators({}, dispatch)))(App)
