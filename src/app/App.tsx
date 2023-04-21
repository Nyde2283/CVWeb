import React from 'react';
import Header from './components/Header';
import TexteMedia from './components/TexteMedia/TexteMedia';
import { legendeContent } from '../assets/legendeContent';
import { carrouselImgC1, carrouselImgC2, carrouselImgC3 } from './importator';
import './App.css';

function App() {
	return (
		<div className="app">
			<Header />
			<TexteMedia
				carrouselImages={carrouselImgC1}
				legendcontent={legendeContent[0]}
				rightDirection={true}
			/>
			<TexteMedia
				carrouselImages={carrouselImgC2}
				legendcontent={legendeContent[1]}
				rightDirection={false}
			/>
			<TexteMedia
				carrouselImages={carrouselImgC3}
				legendcontent={legendeContent[1]}
				rightDirection={true}
			/>
		</div>
	);
}

export default App;
