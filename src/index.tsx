import * as React from "react";
import * as ReactDOM from "react-dom";
import OfflinePluginRuntime from "offline-plugin/runtime";
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';

import '@Root/i18n';

import App from "@Root/pages/App";
import { isProduction } from '@Root/utils';

// Webpack offline plugin
if (isProduction) {
	OfflinePluginRuntime.install();
}

import {store} from './configureStore';

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