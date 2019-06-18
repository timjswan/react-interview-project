import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserInput from "./UserInput";
import UserRepos from "./UserRepos";
import UserOrgs from "./UserOrgs";

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {user: ''};
	}

	setUser = user => {
		this.setState({user});
	}

	render(){
		return (
			<React.Fragment>
				<UserInput onUserChange={this.setUser} />
				<Router>
					<Link to="/repos">Repositories</Link>
					<Link to="/docs">Organisations</Link>
					<Route path="/repos" component={props => <UserRepos {...props} user={this.state.user} />} />
					<Route path="/docs" component={props => <UserOrgs {...props} user={this.state.user} />} />
				</Router>
			</React.Fragment>
		);
	}
}

export default Search;
