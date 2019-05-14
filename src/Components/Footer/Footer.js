import React from "react";
import "./Footer.css"

const Footer = () => {
	
	const toForm = () => {
		window.open('https://forms.gle/z6XAwYTJbe36a9DH6', '_blank');
	};
	
	return (
		<footer id="footer">
			<a
				href={"https://github.com/captainCapitalism/spotifyFolders"}
				target={"_blank"}
			>
				<img src="githubIcon.png"
				     alt="GitHub icon"
				/>
			</a>
			
			<a
				className="link"
				href={"https://forms.gle/z6XAwYTJbe36a9DH6"}
				target={"_blank"}
			>
				<i className="far fa-file-alt"></i>
			</a>
		
		</footer>
	)
};

export default Footer;