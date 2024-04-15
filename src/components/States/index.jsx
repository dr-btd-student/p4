// Importing the necessary dependencies
import React from "react";
import "./States.css";

// Defining the States component as a class-based component
class States extends React.Component {
	// Initializing the component's state
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "", // The value entered in the input field
			// filteredStates: window.models.states(), // The initial list of states
		};
	}

	// Event handler for input change
	handleInputChange = (event) => {
		const value = event.target.value;
		this.setState({ inputValue: value }); // Updating the inputValue state
		this.checkString(value); // Calling the checkString method to filter the states
	};

	// Method to filter the states based on the input value
	// checkString = (inputValue) => {
	// 	const filteredStates = window.models.states().filter((state) => {
	// 		return state.toLowerCase().includes(inputValue.toLowerCase());
	// 	});
	// 	this.setState({ filteredStates }); // Updating the filteredStates state
	// };

	// Render method to render the component's UI
	render() {
		return (
			<div className='states-container'>
				<input
					className='states-input'
					type='text'
					placeholder='Search for a state'
					onChange={this.handleInputChange}
					value={this.state.inputValue}
				/>
				<p>Filtering for: {this.state.inputValue}</p>
				{this.state.filteredStates.length > 0 ? (
					<ul className='states-list'>
						{this.state.filteredStates.sort().map((state, index) => (
							<li className='states-item' key={index}>
								{state}
							</li>
						))}
					</ul>
				) : (
					<p>No states found</p>
				)}
			</div>
		);
	}
}

// Exporting the States component as the default export
export default States;
