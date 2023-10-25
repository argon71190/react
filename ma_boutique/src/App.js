import React from 'react';
import AppRouter from './AppRouter';

import Footer from './views/Footer';
import './css/App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Bienvenue</p>
			</header>
			<AppRouter />
			<Footer />
		</div>
	);
}

export default App;


/*
Apprendre REACT/
|-- ma_boutique
	src/
		|-- App.js
		|-- AppRouter.jsx
		|-- ContactPage.jsx
		|-- Footer.jsx
		|-- HomePage.css
		|-- HomePage.jsx
		|-- index.css
		|-- index.js
		|-- Navbar.jsx
		|-- ...
	public/
	node_modules/
	build/
	.git/
	.gitgnore
	package.json
	package-look.json
	README.md
|-- node_modules
|-- package.json
|-- package-look.json
|-- server.js


PS C:\Users\argon\Desktop\Apprendre REACT> node server.js

PS C:\Users\argon\Desktop\Apprendre REACT> cd ma_boutique
PS C:\Users\argon\Desktop\Apprendre REACT\ma_boutique> npm start

*/