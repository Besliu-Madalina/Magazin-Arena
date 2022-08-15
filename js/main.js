new SimpleLightbox({ elements: '.galerie a' });


function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}


function updateClock() {
    var now = new Date();
    var dnum = now.getDay(),
        luna = now.getMonth(),
        
        an = now.getFullYear();

    var months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    var week = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];
    var ids = ["date", "month", "year"];
    var values = [week[dnum], months[luna], an];
    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}