import React from 'react';
import Carrousel from './Carrousel/Carrousel';
import Legende from './Legende/Legende';
import './TexteMedia.css';

interface TexteMediaProps {
	carrouselImages: string[];
	legendcontent: JSX.Element[];
	rightDirection: boolean;
}

function TexteMedia({
	carrouselImages,
	legendcontent,
	rightDirection,
}: TexteMediaProps) {
	const className = rightDirection ? 'textemedia' : 'reverttextemedia';
	return (
		<div className={className}>
			<Carrousel images={carrouselImages} />
			<Legende content={legendcontent} />
		</div>
	);
}

export default TexteMedia;
