import { Cards } from "./cards.js";

window.onload = () => {
    let animateCards = new Cards();

    // The "bind()" method, bind the method to an instance,
    document.addEventListener("scroll", animateCards.scrollCards.bind(animateCards));
}