import React, { Component } from "react";
import { TextField, Divider, List, InputAdornment, ListItem, createMuiTheme, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { AddCircle, Delete, Done } from "@material-ui/icons";
import { ThemeProvider, withStyles } from '@material-ui/styles';

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

function generate(element) {
	console.log(element)
	return [0, 1, 2].map(value => {
		React.cloneElement(element, {
			key: value
		})
	})
}

export default class FormControl extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dense: false,
			inputFields: []
		}
	}

	addInputField = (e) => {
		let inputFields = this.state.inputFields.concat([''])
		this.setState({
			inputFields
		})
	}

	deleteInputField = i => e => {
		let inputFields = [
			...this.state.inputFields.slice(0, i),
			...this.state.inputFields.slice(i + 1),
		]
		this.setState({
			inputFields
		})
	}
	handleInputText = i => e => {
		let inputFields = [...this.state.inputFields]
		inputFields[i] = e.target.value
		this.setState({
			inputFields
		})
	}

	render() {

		const { primary, secondary, addButton, item, hasMultipleValues, addItem } = this.props

		return (
			<List dense={this.state.dense}>
				<ListItem
					style={{
								paddingLeft: '0',
								paddingRight: '80px'
					}}>
						<ListItemText 
							primary={primary}
							secondary={ secondary ? secondary : null }
							/>
							{this.state.inputFields.map((input, i) => (
								<CustomTextField
									id="outlined-dense"
									// label={primary}
									label={'Value'}
									variant="outlined"
									style={{
										width: '96px',
										marginRight: 8
									}}
									key={i}
									margin="dense"
									onChange={this.handleInputText(i)}
									value={input}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton edge="end"
												size="small"
												onClick={this.deleteInputField(i)}
												>
													<Delete />
												</IconButton>
											</InputAdornment>
										)
									}}
									// style={{ marginBottom: 24 }}
								/>
							))}

							{ addButton && hasMultipleValues ? (
							<ListItemSecondaryAction>
								<IconButton edge="end" onClick={this.addInputField}>
									<AddCircle />
								</IconButton>
							<IconButton edge="end" onClick={() => {
								addItem({
									item: item,
									values: this.state.inputFields 
									})}} >
								<Done />
							</IconButton>
							</ListItemSecondaryAction>
							): null }

				</ListItem>
				<Divider />
			</List>
		)
	}
}