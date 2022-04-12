import test from "./test"; //同步引入
console.log(test.name);

function getLodash() {
	//异步引入lodash
	return import(/* webpackChunkName: 'lodash2'*/ "lodash").then(
		({ default: _ }) => {
			let el = document.createElement("div");
			el.innerHTML = _.join(["Hello", "webpack"], "_");
			return el;
		}
	);
}

getLodash().then((el) => {
	document.body.appendChild(el);
});
