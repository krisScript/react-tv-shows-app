import React, { FunctionComponent, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import ShowsContainer from './ShowsContainer/ShowsContainer';
import ShowPage from '../components/ShowPage/ShowPage';
import Navbar from './Navbar';
const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ShowsContainer} />
          <Route
            exact
            path="/show/:showId"
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
export default Router;
