class Cards {
    constructor() {

    }

    scrollCalculation() {
        let positionY = document.getElementById("section-tips").getBoundingClientRect()["y"];

        console.log(positionY);
        if(positionY <= 25) {
            document.querySelector(".card-left").style.backgroundColor = "blue";
            document.querySelector(".card-right").style.backgroundColor = "red";
        }
    }
}

export { Cards }