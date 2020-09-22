import React from 'react'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Header from './components/Header/Header'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import Register from './components/Login/Register/Join'
import { UserProvider } from './Context/Context'

const browserHistory = createBrowserHistory()

const App = () => {
    return (
        <Router history={browserHistory}>
            <UserProvider>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/login'} component={LoginPage} />
                    <Route path={'/Register'} component={Register} />
                    <Route path={'/main'} component={MainPage} />
                    <Route
                        path={'/AddScore'}
                        component={withRouter(MainPage)}
                    />
                    <Route
                        path={'/DashBoard'}
                        component={withRouter(MainPage)}
                    />
                    <Route
                        path={'/SearchInfo'}
                        component={withRouter(MainPage)}
                    />
                    <Route path={'/Ranking'} component={withRouter(MainPage)} />
                    <Route path={'/Setting'} component={withRouter(MainPage)} />
                </Switch>
            </UserProvider>
        </Router>
    )
}

export default App
