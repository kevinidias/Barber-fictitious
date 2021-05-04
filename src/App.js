import React from 'react';
import  { ContainerGrid } from './AppStyled.js';


import Header from './Sections/Header/Header';
import About from './Sections/About/About.js';
import Services from './Sections/Services/Services.js';
import Contact from './Sections/Contact/Contact.js';

function App() {
	return (
		<ContainerGrid>
			<Header />
			<About />
			<Services />
			<Contact />
		</ContainerGrid>
	);
}

export default App;
