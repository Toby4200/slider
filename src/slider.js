/*
* Custom slider
->  pass element to create slider
    then initialize html structure with next / prev button
    run autoslide
    show progress bar
*/

class Super {
    constructor(el, config) {
        this.initializeSlider(el, config);

        const { slideDuration = 2000 } = config;
    
        //
        this.$container = $('.s');

        // export variables
        this.slideDuration = slideDuration;

    }

    initializeSlider(el, config) {
        console.log('slider is created', el);
        // run circle scroll

        const width = el.scrollWidth;
        console.log('jQuery', $);

        // handler on navigation buttons
        $('.s__nav-left, .s__nav-right').on('click', this.handleNavClick);

        // calculate width
        // animate to zero
        // create scroll to right slider


        // initialize buttons left / right
        // onClick - scroll 1 / nth width
    }
    
    handleNavClick(el) {
        debugger;
        const isDirectionRight = !(el.currentTarget.className.search('right') === -1);
        s.move(isDirectionRight);
    }

    move(isRightDirection) {
        console.log('some', this);
        const $width = $('.s').width();
        this.$container.animate({
            left: isRightDirection ? $width : -$width
        }, this.slideDuration);
    }

};

const el = document.querySelector('.s');
const s = new Super(el, {
    slideDuration: 5000,
    width: '100px',
    funny: true,
    insaneMode: true
});

