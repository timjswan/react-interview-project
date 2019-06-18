import React from 'react';
import UserInput from "./UserInput";
import UserRepos from "./UserRepos";
import UserOrgs from "./UserOrgs";

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {user: ''};
		this.handleUserChange = this.handleUserChange.bind(this);
	}

	setUser(user){
		this.setState({user});
	}

	render(){
		return (
			<React.Fragment>
				<UserInput onUserChange={this.setUser} />
				<UserRepos user={this.state.user} />
				<UserOrgs user={this.state.user} />
			</React.Fragment>
		);
	}
}

export default Search;
