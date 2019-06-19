import React, { Component } from "react";
import { getUserData } from "./github-api";

class UserInput extends Component {
	constructor(props){
		super(props);
		this.state = {user: ''};
	}

	// Handle the api results as the username is being typed
	handleChange = async e => {
		const user = e.target.value;

		this.setState({user: user});
		this.props.onUserChange(user);

		// Not having this min char would probably break things
		if(user.length > 3){
			try {
				const res = await getUserData(user);
				if(Object.keys(res.user).length > 0) {
					const orgs = res.orgs
					this.props.updateUserOrgs(orgs);
					this.props.userExists(true);
				}
			} catch(err) {
				this.props.userExists(false);
			}
		} else {
			// Typed user name is too short so the user can't exist
			this.props.userExists(false);
		}
	}

	render(){
		return (			
	        <input onChange={this.handleChange} placeholder="Enter username." type="text" name="user" id="user" value={this.state.user} />
        );
	}
}

export default UserInput;