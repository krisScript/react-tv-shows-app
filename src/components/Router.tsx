import React, { FunctionComponent, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import ShowsContainer from './ShowsContainer/ShowsContainer'
import ShowPage from '../components/ShowPage/ShowPage'
const Router: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={ShowsContainer}
                    />
                    <Route
                        exact
                        path="/show/:showName"
                        render={() => (
                            <Suspense fallback={<Spin size="large" />}>
                                <ShowPage />
                            </Suspense>
                        )}
                    />
                </Switch>
            </>
        </BrowserRouter>
    );
};
export default Router