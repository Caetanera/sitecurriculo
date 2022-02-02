const toTop = () => window.scrollTo({top: 0, behavior:'smooth'});

const getUserSelectedText = () => {
	return window.getSelection().toString();
}