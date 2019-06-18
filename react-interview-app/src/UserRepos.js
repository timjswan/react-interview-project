import React, { Component } from "react";
import { getRepos } from "./github-api";

class UserRepos extends Component {
	constructor(props){
		super(props);
		this.state = {repos: []};
	}

	componentDidMount() {
		const user = this.props.user;
		if(user.length > 3){
			getRepos(user).then(res => this.setState({
				repos: res
			}));
		}
	}

	render(){
		const repos = this.state.repos;
		return(
			<React.Fragment>
				<h1>Repositories</h1>
				{repos.length <= 0
				? "No data"
				: repos.map((repo, i) => (
					<p key={i}>{repo.name}</p>
				))}
			</React.Fragment>
		);
	}
}

export default UserRepos;