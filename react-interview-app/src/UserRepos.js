import React, { Component } from "react";
import { getRepos } from "./github-api";

class UserRepos extends Component {
	_isMounted = false;

	constructor(props){
		super(props);
		this.state = {repos: []};
	}

	async componentDidMount(){
		this._isMounted = true;
		const user = this.props.user;
		if(user.length > 3){
			try{
				const res = await getRepos(user);
				if(!res.length > 0)
					throw Error(res.statusText);
				else
					if(this._isMounted)
						this.setState({repos: res});
			} catch (err) {
				//
			}
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render(){
		const repos = this.state.repos;
		return(
			<React.Fragment>
				<h1>Repositories</h1>
				{repos.length <= 0
				? "No repositories to show"
				: repos.map((repo, i) => (
					<p key={i}>{repo.name}</p>
				))}
			</React.Fragment>
		);
	}
}

export default UserRepos;