class Slider {
    constructor(el) {
        this.el = el;
        this.activeIndex = 0;
        this.numItems = this.el.children().length;
        // automatically advance slider
        this.interval = setInterval(() => this.next(), 5000);
    }

    prev() {
        this.activeIndex--;
        if (this.activeIndex < 0)
            this.activeIndex = this.numItems - 1;
        this.updateDom();
    }

    next() {
        this.activeIndex++;
        if (this.activeIndex >= this.numItems)
            this.activeIndex = 0;
        this.updateDom();
    }

    updateDom() {
        this.el.children().css('transform', `translateX(-${this.activeIndex}00%)`)
    }
}

$(() => {
    let slider = new Slider($(".work"));
    $(".prev").click(() => slider.prev());
    $(".next").click(() => slider.next());
});