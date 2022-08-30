import { Cards } from "./cards.js";
import { Icons } from "./icons.js";

window.onload = () => {
    let animateCards = new Cards();

    document.addEventListener("scroll", animateCards.scrollCards.bind(animateCards));

    let icons = new Icons();

    icons.animateIcons();
}