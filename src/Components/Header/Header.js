import React from 'react';
import './Header.css';
import {toggleClass} from "../../functions";

const toggleVisibilityOfAlbums = () => {
	const albumContainer = document.getElementById("album-container");
	const className = "hidden";
	toggleClass(albumContainer, className);
};

const toggleVisibilityOfFolders = () => {
	const albumContainer = document.getElementById("folder-container");
	const className = "hidden";
	toggleClass(albumContainer, className);
};

const Header = () => {
	return (
		<header>
			<button onClick={toggleVisibilityOfAlbums}>albums</button>
			<button onClick={toggleVisibilityOfFolders}>folders</button>
			This is header
		</header>
	)
};

export default Header;