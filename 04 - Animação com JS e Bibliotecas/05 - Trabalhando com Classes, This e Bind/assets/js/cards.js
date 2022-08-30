class Cards {
    constructor() {
        // The "this" references the own instance of the object
        this.positionTipsSection = document.getElementById("section-tips");
        this.$leftCard = document.querySelector(".card-left");
        this.$rightCard = document.querySelector(".card-right");
    }

    scrollCalculation() {
        let positionY = this.positionTipsSection.getBoundingClientRect()["y"];

        console.log(positionY);
        if(positionY <= 25) {
            this.$leftCard.style.transform = `translate(${positionY}px)`;
            this.$rightCard.style.transform = `translate(${-positionY}px)`;
        }
    }

    scrollCards() {
        window.requestAnimationFrame(this.scrollCalculation.bind(this));
    }
}

export { Cards }