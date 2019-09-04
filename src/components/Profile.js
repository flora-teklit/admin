import React, { Component } from 'react';
import { Menu, MenuItem } from '@material-ui/core';

export default class Profile extends Component {

	constructor(props) {
		super(props)
		this.state = {
			anchorEl: null
		}
	}

	handleClick = (event) => {
			this.setState({
				anchorEl: event.currentTarget
			})
	}

	handleClose = () => {
			this.setState({
				anchorEl: null
			})
	}

	goto = (route) => {
		this.props.history.push(route);
		//MARK: - Close the menu
		this.setState({
			anchorEl: null
		})
	}

	render() {
		return (
			<div>
				<div id="profile" onClick={this.handleClick}>
					<div className="account-menu mc-popover">
						<span role="button" tabIndex="0" aria-haspopup="true" aria-expanded="false" aria-disabled="false"
							className="mc-popover-trigger" aria-label="Account menu">
							<span className="mc-button mc-button-circular">
								<span className="mc-button-content">
									<div className="mc-avatar avatar avatar--circle avatar--brand">
										<span id="shortName">A</span>
									</div>
								</span>
							</span>
						</span>
					</div>
				</div>
				<Menu
					anchorEl={this.state.anchorEl}
					keepMounted
					open={Boolean(this.state.anchorEl)}
					onClose={this.handleClose}
			>
					<MenuItem onClick={() => this.goto('/opd/settings')}>Settings</MenuItem>
					<MenuItem onClick={() => this.goto('/login') }>Logout</MenuItem>
				</Menu>
			</div>
		)
	}
}