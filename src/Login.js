import React from "react";
import {authEndpoint, clientId, redirectUri, scopes} from "./config";

const Login = () => {
	const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
		"%20"
	)}&response_type=token&show_dialog=true`;
	return (
		<a  className="btn btn--loginApp-link"
			href={url}
		>
			Login to Spotify
		</a>)
};

export default Login;