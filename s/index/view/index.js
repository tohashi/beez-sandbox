/**
 * @name index.js<index/view>
 * @author <author>
 * @overview view of index
 */

define(function (require, exports, module) {
    'use strict';

    var beez = require('beez');
    var $ = beez.vendor.$;
    var mcss = beez.manager.css;
    var logger = beez.getLogger('index.view');

    var template = require('index/hbs/index.hbsc');

    /**
     * View class
     *
     * @namespace index
     * @class
     * @name IndexView
     * @extends {beez.View}
     * @see beez.View
     */
    var IndexView = beez.View.extend(
        'index.view.IndexView',
        {
            tagName: 'section',
            id: 'todos',
            vidx: '@',

            render: function render(done) {
                mcss.async().load('/index/styl/index.css').then(_.bind(function() {
                    $('body').append(this.$el);
                    done();
                }, this)).end();
            }
        });

    return IndexView;
});
