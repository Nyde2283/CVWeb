import React from 'react';
import './Legende.css';

interface LegendeProps {
	content: JSX.Element[];
}

function Legende({ content }: LegendeProps) {
	const title = content[0];
	const description = content[1];
	return (
		<div className="Legende">
			{title}
			{description}
		</div>
	);
}

export default Legende;
