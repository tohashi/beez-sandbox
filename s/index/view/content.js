define(function(require, exports, module) {
    'use strict';

    var beez = require('beez'),
        logger = beez.getLogger('index.view.content'),
        template = require('index/hbs/index.hbsc'),
        ContentView;


    ContentView = beez.View.extend(
        'index.view.ContentView',
        {
            vidx: 'content',
            order: 1,

            render: function() {
                this.getParent().$el.append(template());
            }
        }
    );
    return ContentView;
});
