import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Content from './content/list'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect, withRouter
} from 'react-router-dom';

const getContent = (props) => {
    return <Content {...props} />
}

const RouteApp = ({}) => (
    <Router>
        <Switch>
            <Route path='/' render={getContent}/>
        </Switch>
    </Router>
)

export default withRouter(connect(
    state => ({}), dispatch => bindActionCreators({}, dispatch)
)(RouteApp))
