import React, { Component } from "react";
import { getUserData } from "./github-api";

class UserInput extends Component {
	constructor(props){
		super(props);
		this.state = {user: ''};
	}

	handleChange = e => {
		const user = e.target.value;
		let userData = {};

		this.setState({user: user});

		if(user.length > 3){
			userData = getUserData(user);
			userData.then((result) => {
				const orgs = result.orgs
				this.props.onUserChange(user, orgs);
			});
		}
	}

	render(){
		return (
			<form className="App" name="git-search-form" id="git-search-form" action="#">
	            <input onChange={this.handleChange} type="text" name="user" id="user" value={this.state.user} />
	        </form>
        );
	}
}

export default UserInput;