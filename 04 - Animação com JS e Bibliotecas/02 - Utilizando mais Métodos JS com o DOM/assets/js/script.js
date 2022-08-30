import { Cards } from "./cards.js";

window.onload = () => {
    let animateCards = new Cards();

    document.addEventListener("scroll", animateCards.scrollCalculation);
}