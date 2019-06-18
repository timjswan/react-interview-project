import React, { Component } from "react";
import "./github-api";

class UserRepos extends Component {
	constructor(props){
		super(props);
	}

	getRepos = user => {

	};

	render(){
		return(
			<React.Fragment>
				<h1>Repositories</h1>
				<p>{this.props.user}</p>
			</React.Fragment>
		);
	}
}

export default UserRepos;