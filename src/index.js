function dropdown() {
    
    let nav = document.getElementById("navigation");
    nav.classList.toggle("show-us-the-menu");

    let burger = document.getElementById("burger"); 
    burger.classList.toggle("cross");

    // let nav = document.getElementById("navigation");
    // if (nav.className === "nav") { //om klassnamnet bara är nav
    //     nav.className += " show-us-the-menu";
    // } else { //om klassnamnet inte är enbart nav
    //     nav.className = "nav";
    // }

    // let burger = document.getElementById("burger"); 
    // if (burger.className === "burger") { //om klassnamnet bara är nav
    //     burger.className += " cross";
    // } else { //om klassnamnet inte är enbart nav
    //     burger.className = "burger";
    // }
}