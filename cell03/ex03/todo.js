function addToDo() {
    let textInput = prompt("Enter a to-do item");
    if (textInput != null && textInput != "" && textInput != " ") {
        const babbo = document.getElementById("ft_list");
        const figlio = document.createElement("div");
        figlio.setAttribute("onclick", "removeFiglio(this)"); //In JavaScript, the this keyword refers to an object.Which object depends on how this is being invoked (used or called). The this keyword refers to different objects depending on how it is used: In an object method, this refers to the object. Alone, this refers to the global object. In an event, this refers to the element that received the event.
        figlio.setAttribute("id", "id-" + Date.now());
        figlio.setAttribute("class", "newFiglio");
        figlio.innerHTML = textInput;
        babbo.insertBefore(figlio, babbo.firstChild);
        document.cookie = "bob=" + encodeURIComponent(babbo.innerHTML); // encodeURIComponent() is used to encode special characters
    }
}

function removeFiglio(element) {
    if (confirm("Are you sure you want to delete this poor bOb?")) {
        const figlio_r = document.getElementById(element.id);
        const babbo = figlio_r.parentNode;
        babbo.removeChild(figlio_r);
        document.cookie = "bob=" + encodeURIComponent(babbo.innerHTML);
    }
}

function getCookie() {
    let cookie = document.cookie;
    if (cookie != "") {
        const babbo = document.getElementById("ft_list");
        babbo.innerHTML = decodeURIComponent(cookie.split("bob=")[1]);
    }
}

window.onload = getCookie();
if (todo) {
    document.getElementById("ft_list").innerHTML = decodeURIComponent(todo);
    document.getElementById("ft_list").removeFiglio(document.getElementById("ft_list").firstChild);
}