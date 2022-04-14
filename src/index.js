import React, { Component } from "react";
import Child from "./child";
import ReactDom from "react-dom";
import _ from 'lodash';
class App extends Component {
	render() {
		return (
			<div>
				<div>{_.join(['hello', 'world'], '_')}</div>
				<Child></Child>
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById("root"));
