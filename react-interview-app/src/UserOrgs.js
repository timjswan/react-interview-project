import React, { Component } from "react";
import "./github-api";

class UserOrgs extends Component {
	constructor(props){
		super(props);
	}

	getOrgs = user => {

	};

	render(){
		return(
			<React.Fragment>
				<h1>Organisations</h1>
				<p>{this.props.user}</p>
			</React.Fragment>
		);
	}
}

export default UserOrgs;