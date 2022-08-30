class Icons {
    constructor() {
        this.$iconsList = document.querySelectorAll(".icon");
    }

    animateIcons() {
        gsap.to(this.$iconsList, {scale: .95, repeat: -1, yoyo: true, duration: 1});
    }
}

export { Icons }