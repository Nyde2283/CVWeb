import React, { useState } from 'react';
import ScrollPoints from './ScrollPoints';
import './Carrousel.css';

interface CarrouselProps {
	images: string[];
}

function Carrousel({ images }: CarrouselProps) {
	const [currentIndice, setIndice] = useState(0);
	const pointsStatus = Array<boolean>(images.length).fill(false);
	pointsStatus[currentIndice] = true;

	function clickHandlerFactory(i: number) {
		return () => {
			setIndice(i);
		};
	}

	return (
		<div className="carrousel">
			<img src={images[currentIndice]} className="carrouselimg"></img>
			<ScrollPoints
				pointsStatus={pointsStatus}
				clickHandlerFactory={clickHandlerFactory}
			/>
		</div>
	);
}

export default Carrousel;
