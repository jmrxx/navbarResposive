// show menu with javascript
const menu = document.querySelector("#menu");
	const ul = document.querySelector(".ul");

	menu.addEventListener("click", () => {
		ul.classList.toggle("active");
	});