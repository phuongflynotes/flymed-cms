import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { ContentMultipleListLoader } from '@Root/components/ContentLoader';
import Waiting from '@Root/components/Waiting';

import {List} from 'react-content-loader';
// import Footer from '@Root/components/Footer';
import Header from '@Root/components/Header';
import { PrivateRoute, PublicRoute } from '@Root/routes';

const ProcedurePage = lazy(() => import(
  /*
    webpackChunkName: "home-page",
    webpackPreload: true
  */
  '@Root/pages/ProcedurePage'));

const NotFoundPage = lazy(() => import(
  /*
    webpackChunkName: "not-found-page",
    webpackPrefetch: true
  */
 '@Root/pages/NotFoundPage'));

const RiskPage = lazy(() => import(
  /*
    webpackChunkName: "react-page",
    webpackPrefetch: true
  */
  '@Root/pages/RiskPage'));

const DashboardPage = lazy(() => import(
/*
    webpackChunkName: "react-page",
    webpackPrefetch: true
*/
'@Root/pages/DashboardPage'));

const ProcedureExtractionPage = lazy(() => import(
/*
    webpackChunkName: "react-page",
    webpackPrefetch: true
*/
'@Root/pages/ProcedureExtractionPage'));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<List />}>
        <Header />
      </Suspense>
      <Suspense fallback={<ContentMultipleListLoader />}>
          <BrowserRouter>
              <Switch>
                  <PublicRoute restricted={false} component={ProcedurePage} path="/" exact />
                  <PublicRoute restricted={false} component={ProcedureExtractionPage} path="/procedure/:id" exact />
                  <PublicRoute restricted={false} component={RiskPage} path="/risk" exact />
                  <PublicRoute restricted={false} component={NotFoundPage} path="/notfound" exact />
                  <PrivateRoute component={DashboardPage} path="/dashboard" exact />
              </Switch>
          </BrowserRouter>
      </Suspense>
      <Waiting />
      {/* <Suspense fallback={<FooterContentLoader />}>
        <Footer />
      </Suspense> */}
    </Fragment>
  );
}

export default App;