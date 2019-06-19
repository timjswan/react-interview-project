import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import UserInput from "./UserInput";
import UserRepos from "./UserRepos";
import UserOrgs from "./UserOrgs";
import "@csstools/normalize.css";
import "./css/search.css";

// On typing either of these components is mounted if the user exists
function ValidUser(){
	return(
		<span className="is-valid-user">&#10003;</span>
	);
}

function InvalidUser(){
	return(
		<span className="is-valid-user">X</span>
	);
}

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {user: '', orgs: [], isValidUser: false};
		this.initialStateOrgs = this.state.orgs;
	}

	resetOrgs(){
		this.setState({orgs: this.initialStateOrgs});
	}

	//Lifting the state.user out of UserInput so other components can use it
	handleUserChange = (user) => {
		this.setState({user});
	}

	//Lifting the state.orgs out of UserInput so other components can use it
	updateUserOrgs = (orgs) => {
		this.setState({orgs});
	}

	userExists = (isValidUser) => {
		if(isValidUser)
			this.setState({isValidUser: true});
		else {
			this.setState({isValidUser: false});
			this.resetOrgs();
		}
	}

	render(){
		//Determine which valid user component we should mount
		let validUserComp;
		if(this.state.isValidUser)
			validUserComp = <ValidUser />;
		else
			validUserComp = <InvalidUser />;

		return (
			<React.Fragment>
				<form name="git-search-form" id="git-search-form" action="#">
						<UserInput onUserChange={this.handleUserChange} updateUserOrgs={this.updateUserOrgs} userExists={this.userExists}/>
						{validUserComp}
				</form>
				<Router>
					<nav>
						<NavLink to="/repos" activeClassName="nav-link-active">Repositories</NavLink>
						<NavLink to="/orgs" activeClassName="nav-link-active">Organisations</NavLink>
					</nav>
					<section id="user-data">
						<Route path="/repos" component={props => <UserRepos {...props} user={this.state.user} />} />
						<Route path="/orgs" component={props => <UserOrgs {...props} user={this.state.user} orgs={this.state.orgs}/>} />
					</section>
				</Router>
			</React.Fragment>
		);
	}
}

export default Search;
