import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserInput from "./UserInput";
import UserRepos from "./UserRepos";
import UserOrgs from "./UserOrgs";
//import "./css/search.css";

function ValidUser(){
	return(
		<span>&#10003;</span>
	);
}

function InvalidUser(){
	return(
		<span>X</span>
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

	handleUserChange = (user) => {
		this.setState({user});
	}

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
		let validUserComp;
		if(this.state.isValidUser)
			validUserComp = <ValidUser />;
		else
			validUserComp = <InvalidUser />;

		return (
			<React.Fragment>
				<UserInput onUserChange={this.handleUserChange} updateUserOrgs={this.updateUserOrgs} userExists={this.userExists}/>
				{validUserComp}
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
