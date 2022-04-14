import React, { Component } from "react";
import Child from "./child";
import ReactDom from "react-dom";
import _ from 'lodash';
class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [0, 2, 3]
		}
	}
	

	render() {
		return (
			<div>
				<div>{_.join(['hello', 'world'], '_')}</div>
				<Child></Child>
				{this.state.data?.map((item) => {
					return <div key={item}>{item ?? '-'}</div>;
				})}	
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById("root"));
