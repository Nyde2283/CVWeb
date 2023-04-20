import React from 'react';
import profilPicture from '../../assets/profile.png';

function Header() {
	return (
		<header className="header">
			<img src={profilPicture} id="profilpicture"></img>
			<p id="name">
				chevereau
				<br />
				edwyn
			</p>
		</header>
	);
}

export default Header;
