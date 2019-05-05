import React from 'react';

const AlbumFetchingPlaceholder = (props) => {
	return (
		<div>
			Hello General Kenobi, I fetched {props.fetched}% of your albums
		</div>)
};

export default AlbumFetchingPlaceholder;