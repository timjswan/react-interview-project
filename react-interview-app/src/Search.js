import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserInput from "./UserInput";
import UserRepos from "./UserRepos";
import UserOrgs from "./UserOrgs";

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {user: '', orgs: []};
	}

	handleChange = (user, orgs) => {
		this.setState({user, orgs});
	}

	render(){
		return (
			<React.Fragment>
				<UserInput onUserChange={this.handleChange} />
				<Router>
					<Link to="/repos">Repositories</Link>
					<Link to="/orgs">Organisations</Link>
					<Route path="/repos" component={props => <UserRepos {...props} user={this.state.user} />} />
					<Route path="/orgs" component={props => <UserOrgs {...props} user={this.state.user} orgs={this.state.orgs}/>} />
				</Router>
			</React.Fragment>
		);
	}
}

export default Search;
