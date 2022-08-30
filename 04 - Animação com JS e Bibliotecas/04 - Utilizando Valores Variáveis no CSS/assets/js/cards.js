class Cards {
    constructor() {

    }

    scrollCalculation() {
        let positionY = document.getElementById("section-tips").getBoundingClientRect()["y"];

        console.log(positionY);
        if(positionY <= 25) {
            document.querySelector(".card-left").style.transform = `translate(${positionY}px)`;
            document.querySelector(".card-right").style.transform = `translate(${positionY}px)`;
        }
    }
}

export { Cards }