import React, { Component } from "react";
import { getUserData } from "./github-api";

class UserInput extends Component {
	constructor(props){
		super(props);
		this.state = {user: ''};
	}

	handleChange = async e => {
		const user = e.target.value;

		this.setState({user: user});
		this.props.onUserChange(user);

		if(user.length > 3){
			try {
				const res = await getUserData(user);
				console.log(res);
				if(Object.keys(res.user).length > 0) {
					const orgs = res.orgs
					this.props.updateUserOrgs(orgs);
					this.props.userExists(true);
				}
			} catch(err) {
				this.props.userExists(false);
			}
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