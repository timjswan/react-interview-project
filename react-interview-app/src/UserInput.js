import React, { Component } from "react";

class UserInput extends Component {
	constructor(props){
		super(props);
		this.state = {user: ''};
	}

	handleChange = e => {
		this.setState({user: e.target.value});
		this.props.onUserChange(e.target.value);
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