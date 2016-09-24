'use strict';

export default {
    show() {
        myApp.showPreloader("请稍后");
    },
    hide() {
          myApp.hidePreloader();
    },
    backCall(backcall) {
        setTimeout(function(){
            backcall();
        },300)
    }
};