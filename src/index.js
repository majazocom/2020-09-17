function dropdown() {
    let nav = document.getElementById("navigation");

    if (nav.className === "nav") { //om klassnamnet bara är nav
        nav.className += " show-us-the-menu";
    } else { //om klassnamnet inte är enbart nav
        nav.className = "nav";
    }
}