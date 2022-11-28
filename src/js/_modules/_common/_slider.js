export default class {

    /**
     * constructor
     */
    constructor() {
        this.speed = 200;
    }


    /**
     * init
     */
    init(){
        this.setEvent();
    }


    /**
     * setEvent
     */
    setEvent(){
        this.setSlider();
    }


    /**
     * setSlider
     */
    setSlider(){
        
        let list = 'js-slider__list';
        let img_src, img_alt;

        $("." + list + " li:first-child").addClass("is-current");

        $("." + list + " li").on("click", function(){

            $(this).addClass("is-current");
            $(".is-current").siblings().not(this).removeClass("is-current");

            img_src = $(this).children('img').attr("src");
            img_alt = $(this).children('img').attr("alt");

            $(this).parents("." + list).prev().children('img').fadeTo(this.speed, 0.2, function(){
                $(this).attr({"src": img_src, "alt": img_alt}).fadeTo(this.speed, 1);
            });

        });

        let itemLength = $('.js-slider__item').length;

        $('.js-slider__item').css({
            'width': 'calc((100% - (13px * 3)) / 4)'
        });
      
    }
}