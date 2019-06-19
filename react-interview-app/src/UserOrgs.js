import React, { Component } from "react";

class UserOrgs extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const orgs = this.props.orgs;
		return(
			<React.Fragment>
				<h1>Organisations</h1>
				{orgs.length <= 0
				? "No organisations to show"
				: orgs.map((org, i) => (
					<p key={i}>{org.login}</p>
				))}
			</React.Fragment>
		);
	}
}

export default UserOrgs;