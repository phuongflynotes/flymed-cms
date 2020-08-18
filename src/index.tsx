import * as React from "react";
import * as ReactDOM from "react-dom";
import OfflinePluginRuntime from "offline-plugin/runtime";
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';

import '@Root/i18n';

import App from "@Root/pages/App";
import { isProduction } from '@Root/utils';
import '@Root/assets/scss/styles.scss';
import configureStore from '@Root/store';

// Webpack offline plugin
if (isProduction) {
	OfflinePluginRuntime.install();
}

const initialState: any = {};

// Create browser history
const history = createBrowserHistory();
// Configure store
const store = configureStore(history, initialState);

const render = (Component:any) => (
	ReactDOM.render(
	  <Provider store={store}>
		<AppContainer>
	    	<Component />
		</AppContainer>
	  </Provider>,
	  document.getElementById("root")
	)
);

render(App);

// Webpack Hot Module Replacement API
if ((module as any).hot) {
	(module as any).hot.accept('@Root/pages/App', () => {
		const NextApp = require('@Root/pages/App').default;
		render(NextApp)
	});
}