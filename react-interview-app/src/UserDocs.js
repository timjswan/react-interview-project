import React, { Component } from "react";
import "./github-api";

class UserDocs extends Component {
	constructor(props){
		super(props);
	}

	/*getRepos = user => {

	};*/

	render(){
		return(
			<p>{this.props.user}</p>
		);
	}
}

export default UserDocs;