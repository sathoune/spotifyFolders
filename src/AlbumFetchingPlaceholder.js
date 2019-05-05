import React from 'react';

const AlbumFetchingPlaceholder = (props) => {
	return (<div>
		Hello General Kenobi, I fetched {Math.round(10000*props.fetched)/100}% of your albums
	</div>)
};

export default AlbumFetchingPlaceholder;