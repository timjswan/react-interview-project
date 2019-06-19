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
		this.props.onUserChange(user);

		if(user.length > 3){
			userData = getUserData(user);
			userData.then(res => {
				const orgs = res.orgs
				this.props.updateUserOrgs(orgs);
				this.props.userExists(true);
			}).catch(err => {
				if(err.response && err.response.status === 404)
					this.props.userExists(false);
			});
		} else {
			this.props.userExists(false);
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