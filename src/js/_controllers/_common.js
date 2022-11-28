import ReplaceImg from '../_modules/_common/_replaceImg';
import Scroll from '../_modules/_common/_scroll';
import Inview from '../_modules/_common/_inview';
import Slider from '../_modules/_common/_slider';

export default class {
    constructor(){
    }
    init(){
        this.replaceImg = new ReplaceImg();
        this.replaceImg.init();

        this.scroll = new Scroll();
        this.scroll.init();

        this.inview = new Inview();
        this.inview.init();

        this.slider = new Slider();
        this.slider.init();
    }
}