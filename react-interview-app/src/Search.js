import React from 'react';
import UserInput from "./UserInput";
import UserRepos from "./UserRepos";
import UserDocs from "./UserDocs";

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {user: ''};
		this.handleUserChange = this.handleUserChange.bind(this);
	}

	handleUserChange(user){
		this.setState({user});
	}

	render(){
		return (
			<React.Fragment>
				<UserInput onUserChange={this.handleUserChange} />
				<UserRepos user={this.state.user} />
				<UserDocs user={this.state.user} />
			</React.Fragment>
		);
	}
}

export default Search;
