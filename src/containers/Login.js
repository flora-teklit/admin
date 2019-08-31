
import React, { Component } from 'react';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import { Grid, createMuiTheme, Typography, TextField, Button, Link } from '@material-ui/core';

const CustomTextField = withStyles(theme => ({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main
      },
    },
  },
})) (TextField);

const theme = createMuiTheme({
  palette: {
    primary: { main: '#4D848A' },
    secondary: { main: '#11cb5f' },
  },
});

const dudUrl = 'javascript:;';

export default class Login extends Component {

	constructor(props) {
		super(props)
	}

	handleLogin = () => {
		this.props.history.push('/admin');
	}

	render() {

		return (
					<ThemeProvider theme={theme}>
						<div className="backdrop"></div>
						<Grid container>
						<Grid item xs={4} style={{ paddingLeft: 46, paddingTop: 46 }}>

						</Grid>

						<Grid item xs={4}>
							<div align="center" style={{
								margin: '36px auto',
							}}>
								<svg width="62.585" height="81.649" viewBox="0 0 62.585 81.649">
										<g data-name="Group 132" transform="translate(-58.657 -987.571)">
												<path data-name="Path 162" d="M89.95,988l-30.8,17.164v44.958l30.8-17.569Z" transform="translate(0)" fill="rgba(107,213,135,0.69)" stroke="#fdffff" strokeMiterlimit="10" strokeWidth="0.5"/>
												<path data-name="Path 163" d="M92.351,988l30.8,17.421V1050.2l-30.8-17.642Z" transform="translate(-2.401)" fill="#fe8c8c" stroke="#fdffff" strokeMiterlimit="10" strokeWidth="0.5"/>
												<path data-name="Path 164" d="M89.95,1036.043l-30.8,17.553,30.8,18.805,30.8-18.732Z" transform="translate(0 -3.474)" fill="#647777" stroke="#fdffff" strokeMiterlimit="10" strokeWidth="0.5"/>
										</g>
								</svg>
							</div>
							<div>
								<div style={{
									padding: '0px 16px',
									width: 320,
									display: 'flex',
									margin: '0 auto',
									justifyContent: 'center',
									alignContent: 'flex-end',
									flexDirection: 'column',
								}}>
									<div style={{
										border: '1px solid rgba(147, 175, 178, 0.54)',
										padding: '24px 24px 24px',
										borderRadius: 8,
										background: '#fff'
										}}>
										<Typography
											variant="h6"
											style={{
												paddingBottom: 16,
											}}
											gutterBottom>
											Login
												</Typography>
										<CustomTextField
											id="outlined-dense"
											label="Phone"
											variant="outlined"
											fullWidth
											style={{ marginBottom: 24 }}
										/>
										<CustomTextField
											id="outlined-dense"
											label="Password"
											variant="outlined"
											fullWidth
											type="password"
											style={{ marginBottom: 24 }}
										/>
										<Button
											color="primary"
											variant="contained"
											fullWidth
											size="large"
											onClick={this.handleLogin}
											style={{ marginBottom: 24, boxShadow: 'none' }}
										>Login</Button>

										<Link
											href={dudUrl}
										>
											Forgot password?
											</Link>
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={4}></Grid>
						</Grid>
					</ThemeProvider>
		)
	}
}