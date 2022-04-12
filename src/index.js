

document.addEventListener("click", () => {
	import(/* webpackPrefetch: true */ './click').then(({handleClick}) => {
		handleClick()
	})
});


