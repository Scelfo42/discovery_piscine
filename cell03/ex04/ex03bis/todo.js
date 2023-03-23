let todoList = $("#ft_list");
let x = document.cookie;

if (x.length > 0) {
	x = x.split(";");
	x.forEach((txt) => {
		CreatNewList(txt.split("=")[0], txt.split("=")[1]);
	});
}

function newButton() {
	let ListValue = prompt("Plese enter to do list");

	if (ListValue.charAt(0) != '') {
		let d = new Date();
		dat = d.setTime(d.getTime());
		document.cookie = dat + "=" + ListValue + ";";
		CreatNewList(dat, ListValue);
	}
}

function CreatNewList(dat, txt) {
	const CreatNew = $("<button></button>").text(txt);
	$(CreatNew).click(function () {
		if (confirm("Click OK to delete") == true) {
			CreatNew.remove();
			document.cookie = dat + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		}
	});
	todoList.prepend(CreatNew);
}
