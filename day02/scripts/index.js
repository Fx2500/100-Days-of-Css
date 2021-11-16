const menu = document.querySelector(".menu-icon");
menu.addEventListener("click", activeMenu);
console.log(menu.children);

function activeMenu() {
    menu.classList.toggle("toggle");
		for (let i = 0; i < menu.children.length; i++) {
			menu.children[i].classList.toggle("inactive");
		}
}


