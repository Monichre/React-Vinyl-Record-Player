import React from 'react'
import {Route} from 'react-router-dom'
import AppStore from './Store/AppStore'
import Home from './Components/Home'

const routes_with_components =  [
    {
        path: '/',
        exact: true,
        component: Home
    }
]

const data = AppStore.data
export default (
    <div>
         {routes_with_components.map((route) => (
            <Route exact={route.exact} path={route.path} render={(props) => (
                <route.component data={data} {...props} />
            )}/>
        ))}
    </div>
)