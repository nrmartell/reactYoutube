import React, { Component}  from 'react';

//start off with a functional component, if you start to
//need adddionational functionality move to class

class SearchBar extends Component{

	constructor (props){
		super(props);

		this.state = {term: ''};
	}

	render() {
		//input element, event handler
		//input is now controlled component, value set by state
		return (
			<div className = "search-bar">
				<input
				value = {this.state.term}
				onChange = { event => this.onInputChange(event.target.value)}/>

			</div>
		);

	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

//event handler
// 	onInputChange(event){
// 		console.log(event.target.value);
// 	}
// }


//functional component
// const SearchBar = () => {
// 	return <input /> //React.create element
// };

export default SearchBar;


//functional components do not have only classes have state
// all js
