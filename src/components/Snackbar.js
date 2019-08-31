import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { CheckCircle, Warning, Info, Close } from '@material-ui/icons';
import ErrorIcon from '@material-ui/icons/Error';

import { IconButton, Button, SnackbarContent, makeStyles, Icon, Snackbar } from '@material-ui/core';

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: ErrorIcon,
  info: Info,
};

export default class SnackbarContentWrapper extends Component {
		constructor(props) {
			super(props)
		}

		render() {
			const { classes, className, message, onClose, variant, ...other } = this.props;
			return (
					<SnackbarContent
							// className={clsx(classes[variant], className)}
							className={clsx(className)}
							aria-describedby="client-snackbar"
							message={
									<span id="client-snackbar" style={{
										display: 'flex',
    						alignItems: 'center',
									}}>
											<Icon style={{
												fontSize: 20,
												opacity: 0.9,
											}} />
											{message}
									</span>
							}
							action={[
									// <IconButton key="close" color="inherit" onClick={onClose}>
									// 		<Close style={{ fontSize: 20 }} />
											
									// </IconButton>,
									<Button color="inherit" size="small" onClick={onClose}>
										Undone
									</Button>
							]}
							{...other}
					/>
			);
		}
}

SnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};