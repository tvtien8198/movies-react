import React, { Suspense } from 'react'

import { Route, Switch } from 'react-router'
import TopBarProgress from "react-topbar-progress-indicator";

import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail'
import { Home } from './pages/Home'

export const Routes = () => {

    TopBarProgress.config({
        barColors: {
          0: "#0D6EFD",
          1: "#0D6EFD",
        },
      });

    return (
        <Suspense fallback={<TopBarProgress />}>
            <Switch>
                <Route
                    path='/:category/search/:keyword'
                    component={Catalog}
                />
                <Route
                    path='/:category/:id'
                    component={Detail}
                />
                <Route
                    path='/:category'
                    component={Catalog}
                />
                <Route
                    path='/'
                    exact
                    component={Home}
                />
            </Switch>
        </Suspense>
        
    )
}
