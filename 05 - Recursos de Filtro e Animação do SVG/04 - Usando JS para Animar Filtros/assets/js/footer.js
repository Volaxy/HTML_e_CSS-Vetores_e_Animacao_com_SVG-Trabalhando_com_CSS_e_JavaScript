class Footer {
    constructor() {
        this.$turbulenceFilter = document.getElementById("turbulence-filter");
    }

    waveEfect() {
        gsap.to(this.$turbulenceFilter, {attr: {baseFrequency: 0.03}, repeat: -1, yoyo: true, duration: 20});
    }
}

export { Footer }