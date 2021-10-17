import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Select from "../components/select";
import Multiselect from "../components/multiselect";

class DataContainer extends Component {
	render() {
		return (
			<div className="wrapper">
				<Select categories={this.props.categories} />
				<Multiselect subcategories={this.props.subcategories} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		categories: state.categories,
		subcategories: state.subcategories,
	};
}

export default connect(mapStateToProps)(DataContainer);
