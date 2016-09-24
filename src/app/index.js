'use strict';

import 'framework7';
import 'framework7.ios.css';
import 'framework7.ios.color.css';
import '../assets/app.scss';

import mainModule from './main/main';
import Router from './router';

var app = {
    init(){
        // Init App
        window.$ = Dom7;
        window.myApp = new Framework7({
            // Enable Material theme
            material: true,
        });
        myApp.addView('.view-main', {
            domCache: true
        });
        
        Template7.global = {
            alink: './src/page/'
        };
        
        mainModule.init();
        Router.init();
    }
};
app.init();
