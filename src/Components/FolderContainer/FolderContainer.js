import React, {Component} from 'react';
import "./FolderContainer.css"

class FolderContainer extends Component {
	constructor(props) {
		super(props);
	}
	
	createFolder(){
		console.log('hi');
	}
	
	render() {
		return (
			<div className="folder-container">
				<header>
					<button onClick={this.createFolder}>
						Create folder
					</button>
				</header>
				<div id={"folders"}>
					jello
				</div>
			</div>)
	}
}

export default FolderContainer;