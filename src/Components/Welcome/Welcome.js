import React from 'react';
import "./Welcome.css";

const Welcome = () => {
	return <div id="welcome">
		<p>Hi</p><br/>
		<main>
			<p>While exploring Spotify I started to drown in multitude of albums
				I saved and I could not manage my music anymore.
				After few searches I could not find appropriate solution and
				I only found that feature like folders was requested years ago already
				but with no positive response from devs or support.
			</p>
			<br/>
			<p>
				Right now it is very unpolished and quite cheaty
				since project does not use any proper database to store your data but folder structure is saved in
				browser's storage so it will not be available on other devices unless you will use
				JSON file that site can let you download and when you clear your browser data structure might be lost.
			</p>
			<br/>
			<p>
				So as you can guess I made it purely with myself in mind.
				However I will be extremely happy if at least one person will find value while using this project.
			</p>
			<br/>
			<p>
				You can check out code on my GitHub account,
				feel free to leave there or with form any feedback you have on mind since user input will help me grow and polish project.
			</p>
			<br/>
			<p id="sign">
				Enjoy,
				<br/>
				Michał
			</p>
		</main>
	</div>
};

export default Welcome;