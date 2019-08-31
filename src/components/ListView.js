import React, { Component } from "react";
import { Divider, List, IconButton, Typography, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { Remove } from "@material-ui/icons";

export default class ListView extends Component {
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

	addItem = (e) => {
		console.log(e)
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

		const { primary, secondary, values, removeItem } = this.props

		return (
			<List dense={this.state.dense}>
				<ListItem style={{
					paddingLeft: '0'
				}}>
						<ListItemText 
							primary={primary}
							secondary={ secondary ? secondary : null }
							/>
							<ListItemSecondaryAction>
								{values.map((item, i) => (
									<Typography key={i} variant="body1" gutterBottom>
										{item}
									</Typography>
								))}
								{removeItem ? (
								<IconButton
									edge="end"
									className="remove-item"
									size="small"
											// onClick={this.deleteInputField(i)}
											>
												<Remove />
									</IconButton>
								): null}
							</ListItemSecondaryAction>
				</ListItem>
				<Divider />
			</List>
		)
	}
}