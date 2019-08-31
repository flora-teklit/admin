import React, { Component } from 'react';
import { Badge, IconButton } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: -3,
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
}))(Badge);

export default class NotificationBadge extends Component {
	render () {
		return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="primary">
        <Notifications />
      </StyledBadge>
    </IconButton>
  )
	}
}