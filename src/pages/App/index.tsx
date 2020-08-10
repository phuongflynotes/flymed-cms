import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { BodyContentLoader, FooterContentLoader, HeaderContentLoader } from '@Root/components/ContentLoader';
import Footer from '@Root/components/Footer';
import Header from '@Root/components/Header';
import { PrivateRoute, PublicRoute } from '@Root/routes'

const HomePage = lazy(() => import(
  /*
    webpackChunkName: "home-page",
    webpackPreload: true
  */
  '@Root/pages/HomePage'));

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

export default (
  <Fragment>
    <Suspense fallback={<HeaderContentLoader />}>
      <Header />
    </Suspense>
    <Suspense fallback={<BodyContentLoader />}>
        <BrowserRouter>
            <Switch>
                <PublicRoute restricted={false} component={HomePage} path="/" exact />
                <PublicRoute restricted={false} component={RiskPage} path="/risk" exact />
                <PublicRoute restricted={false} component={NotFoundPage} path="/notfound" exact />
                <PrivateRoute component={DashboardPage} path="/dashboard" exact />
            </Switch>
        </BrowserRouter>
    </Suspense>
    <Suspense fallback={<FooterContentLoader />}>
      <Footer />
    </Suspense>
  </Fragment>
);