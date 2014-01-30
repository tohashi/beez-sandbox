define(function(require, exports, module) {
    'use strict';

    var beez = require('beez'),
        logger = beez.getLogger('index.view.header'),
        template = require('index/hbs/header.hbsc'),
        HeaderView;

    HeaderView = beez.View.extend(
        'index.view.HeaderView',
        {
            vidx: 'header',
            order: 1,

            render: function() {
                this.getParent().$el.append(template());
            }
        }
    );
    return HeaderView;
});
