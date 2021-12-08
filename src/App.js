import React, { Fragment } from 'react';

import Home from './components/Home/Home';
import MainNavigation from './components/layout/MainNavigation';
import Features from './components/layout/Features';
function App() {
	return (
		<Fragment>
			<MainNavigation />
			<Home />
			<Features />
		</Fragment>
	);
}

export default App;
