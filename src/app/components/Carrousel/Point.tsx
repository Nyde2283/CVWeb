import React from 'react';
import './Point.css';

type ClickHandler = () => void;

interface PointProps {
	selected: boolean;
	clickHandler: ClickHandler;
}

function Point({ selected, clickHandler }: PointProps) {
	const className = selected ? 'selectedpoint' : 'point';
	return <div className={className} onClick={clickHandler}></div>;
}

export default Point;
