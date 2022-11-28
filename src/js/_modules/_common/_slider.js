export default class {

    /**
     * constructor
     */
    constructor() {
        this.speed = 200;
        this.autoplaySpeed = 5000;
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

        $('.' + list + ' li:first-child').addClass('is-current');
        $('.' + list + ' li:last-child').addClass('is-last');

        // サムネイルをクリックした時
        $('.' + list + ' li').on('click', function(){

            $(this).addClass('is-current');
            $('.is-current').siblings().not(this).removeClass('is-current');

            img_src = $(this).children('img').attr('src');
            img_alt = $(this).children('img').attr('alt');

            $(this).parents('.' + list).prev().children('img').fadeTo(this.speed, 0.2, function(){
                $(this).attr({'src': img_src, 'alt': img_alt}).fadeTo(this.speed, 1);
            });

        });

        // 自動再生
        setInterval(function(){

            if($('.' + list + ' li.is-current').hasClass('is-last')) {
                
                $('.' + list + ' li.is-current').is(function(){
                    $(this).removeClass('is-current');
                    $('.' + list + ' li:first-child').addClass('is-current');

                    img_src = $('.is-current').children('img').attr('src');
                    img_alt = $('.is-current').children('img').attr('alt');

                    $(this).parents('.' + list).prev().children('img').fadeTo(this.speed, 0.2, function(){
                        $(this).attr({'src': img_src, 'alt': img_alt}).fadeTo(this.speed, 1);
                    });
                });

            } else {

                $('.' + list + ' li.is-current').is(function(){
                    $(this).removeClass('is-current');
                    $(this).next().addClass('is-current');

                    img_src = $(this).next().children('img').attr('src');
                    img_alt = $(this).next().children('img').attr('alt');

                    $(this).parents('.' + list).prev().children('img').fadeTo(this.speed, 0.2, function(){
                        $(this).attr({'src': img_src, 'alt': img_alt}).fadeTo(this.speed, 1);
                    });
                });

            }
        }, this.autoplaySpeed);
      
    }
}