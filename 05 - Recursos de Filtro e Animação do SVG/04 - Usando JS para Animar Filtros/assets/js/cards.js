class Cards {
    constructor() {
        this.positionTipsSection = document.getElementById("section-tips");
        this.$leftCard = document.querySelector(".card-left");
        this.$rightCard = document.querySelector(".card-right");
    }

    scrollCalculation() {
        let positionY = this.positionTipsSection.getBoundingClientRect()["y"];

        if(positionY >= 25) {
            this.$leftCard.style.transform = `translate(${(-positionY + 25) / 10}%)`;
            this.$rightCard.style.transform = `translate(${(positionY - 25) / 10}%)`;
        }
    }

    scrollCards() {
        window.requestAnimationFrame(this.scrollCalculation.bind(this));
    }
}

export { Cards }