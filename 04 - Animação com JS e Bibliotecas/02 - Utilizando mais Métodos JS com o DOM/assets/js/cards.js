class Cards {
    constructor() {

    }

    scrollCalculation() {
        // This method "getBoundingClientRect()["y"]" read the position y of the element inverting the value
        let position = document.getElementById("section-tips").getBoundingClientRect()["y"];

        console.log(position);
    }
}

export { Cards }