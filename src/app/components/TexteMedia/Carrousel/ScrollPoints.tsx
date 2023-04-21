import React from 'react';
import Point from './Point';
import './ScrollPoints.css';

type ClickHandlerFactoryType = (i: number) => () => void;

interface ScrollPointsProps {
	pointsStatus: boolean[];
	clickHandlerFactory: ClickHandlerFactoryType;
}

function ScrollPoints({
	pointsStatus,
	clickHandlerFactory,
}: ScrollPointsProps) {
	return (
		<div className="scrollpoints">
			{pointsStatus.map((statu, index) => (
				<Point
					selected={statu}
					key={index}
					clickHandler={clickHandlerFactory(index)}
				/>
			))}
		</div>
	);
}

export default ScrollPoints;
