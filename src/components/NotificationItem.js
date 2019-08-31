import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export default class NotificationItem extends Component {

	render() {
		const { time, category, caption, owner } = this.props;

		return (
			<div className="notification-item">
				<div className="notification-header">
					<Typography variant="caption" className="category" color="textPrimary">{category}</Typography>
					<Typography variant="caption" className="time">{time}</Typography>
				</div>
				<div className="notification-body">
					<Typography variant="button">{owner}</Typography>
					<Typography variant="body2">{caption}</Typography>
				</div>
			</div>
		)
	}
}