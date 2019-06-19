import React, { Component } from "react";
import { getRepos } from "./github-api";

class UserRepos extends Component {
	/* Can't update the state when the component is not mounted.
	Otherwise, we get memory leaks. */
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
				if(res.length > 0 && this._isMounted)
					this.setState({repos: res});
			} catch (err) {
				/* Not going to handle the error because we already-
				handle whether the user exists or not in <Search />.
				Even if there are no repos for an existing user the state isn't- 
				going to be updated with anything so the error message in- 
				render will be shown. */
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