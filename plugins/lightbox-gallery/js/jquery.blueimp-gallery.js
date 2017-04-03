/*
 * blueimp Gallery jQuery plugin
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function (factory) {
    'use strict'
    if (typeof define === 'function' && define.amd) {
        define([
            'jquery',
            './blueimp-gallery'
        ], factory)
    } else {
        factory(
            window.jQuery,
            window.blueimp.Gallery
        )
    }
}(function ($, Gallery) {
    'use strict'

    // Global click handler to open links with data-gallery attribute
    // in the Gallery lightbox:
    $(document).on('click', '[data-gallery_1]', function (event) {
        // Get the container id from the data-gallery attribute:
        var id = $(this).data('gallery_1')
        var widget = $(id)
        var container = (widget.length && widget) ||
            $(Gallery.prototype.options.container)
        var callbacks = {
            onopen: function () {
                container
                    .data('gallery_1', this)
                    .trigger('open')
            },
            onopened: function () {
                container.trigger('opened')
            },
            onslide: function () {
                container.trigger('slide', arguments)
            },
            onslideend: function () {
                container.trigger('slideend', arguments)
            },
            onslidecomplete: function () {
                container.trigger('slidecomplete', arguments)
            },
            onclose: function () {
                container.trigger('close')
            },
            onclosed: function () {
                container
                    .trigger('closed')
                    .removeData('gallery_1')
            }
        }
        var options = $.extend(
            // Retrieve custom options from data-attributes
            // on the Gallery widget:
            container.data(),
            {
                container: container[0],
                index: this,
                event: event
            },
            callbacks
        )
        // Select all links with the same data-gallery attribute:
        var links = $('[data-gallery_1="' + id + '"]')
        if (options.filter) {
            links = links.filter(options.filter)
        }
        return new Gallery(links, options)
    });
    $(document).on('click', '[data-gallery_2]', function (event) {
        // Get the container id from the data-gallery attribute:
        var id = $(this).data('gallery_2')
        var widget = $(id)
        var container = (widget.length && widget) ||
            $(Gallery.prototype.options.container)
        var callbacks = {
            onopen: function () {
                container
                    .data('gallery_2', this)
                    .trigger('open')
            },
            onopened: function () {
                container.trigger('opened')
            },
            onslide: function () {
                container.trigger('slide', arguments)
            },
            onslideend: function () {
                container.trigger('slideend', arguments)
            },
            onslidecomplete: function () {
                container.trigger('slidecomplete', arguments)
            },
            onclose: function () {
                container.trigger('close')
            },
            onclosed: function () {
                container
                    .trigger('closed')
                    .removeData('gallery_2')
            }
        }
        var options = $.extend(
            // Retrieve custom options from data-attributes
            // on the Gallery widget:
            container.data(),
            {
                container: container[0],
                index: this,
                event: event
            },
            callbacks
        )
        // Select all links with the same data-gallery attribute:
        var links = $('[data-gallery_2="' + id + '"]')
        if (options.filter) {
            links = links.filter(options.filter)
        }
        return new Gallery(links, options)
    });
    $(document).on('click', '[data-gallery_3]', function (event) {
        // Get the container id from the data-gallery attribute:
        var id = $(this).data('gallery_3')
        var widget = $(id)
        var container = (widget.length && widget) ||
            $(Gallery.prototype.options.container)
        var callbacks = {
            onopen: function () {
                container
                    .data('gallery_3', this)
                    .trigger('open')
            },
            onopened: function () {
                container.trigger('opened')
            },
            onslide: function () {
                container.trigger('slide', arguments)
            },
            onslideend: function () {
                container.trigger('slideend', arguments)
            },
            onslidecomplete: function () {
                container.trigger('slidecomplete', arguments)
            },
            onclose: function () {
                container.trigger('close')
            },
            onclosed: function () {
                container
                    .trigger('closed')
                    .removeData('gallery_3')
            }
        }
        var options = $.extend(
            // Retrieve custom options from data-attributes
            // on the Gallery widget:
            container.data(),
            {
                container: container[0],
                index: this,
                event: event
            },
            callbacks
        )
        // Select all links with the same data-gallery attribute:
        var links = $('[data-gallery_3="' + id + '"]')
        if (options.filter) {
            links = links.filter(options.filter)
        }
        return new Gallery(links, options)
    });
    $(document).on('click', '[data-gallery_4]', function (event) {
        // Get the container id from the data-gallery attribute:
        var id = $(this).data('gallery_4')
        var widget = $(id)
        var container = (widget.length && widget) ||
            $(Gallery.prototype.options.container)
        var callbacks = {
            onopen: function () {
                container
                    .data('gallery_4', this)
                    .trigger('open')
            },
            onopened: function () {
                container.trigger('opened')
            },
            onslide: function () {
                container.trigger('slide', arguments)
            },
            onslideend: function () {
                container.trigger('slideend', arguments)
            },
            onslidecomplete: function () {
                container.trigger('slidecomplete', arguments)
            },
            onclose: function () {
                container.trigger('close')
            },
            onclosed: function () {
                container
                    .trigger('closed')
                    .removeData('gallery_4')
            }
        }
        var options = $.extend(
            // Retrieve custom options from data-attributes
            // on the Gallery widget:
            container.data(),
            {
                container: container[0],
                index: this,
                event: event
            },
            callbacks
        )
        // Select all links with the same data-gallery attribute:
        var links = $('[data-gallery_4="' + id + '"]')
        if (options.filter) {
            links = links.filter(options.filter)
        }
        return new Gallery(links, options)
    });
    $(document).on('click', '[data-gallery_5]', function (event) {
        // Get the container id from the data-gallery attribute:
        var id = $(this).data('gallery_5')
        var widget = $(id)
        var container = (widget.length && widget) ||
            $(Gallery.prototype.options.container)
        var callbacks = {
            onopen: function () {
                container
                    .data('gallery_5', this)
                    .trigger('open')
            },
            onopened: function () {
                container.trigger('opened')
            },
            onslide: function () {
                container.trigger('slide', arguments)
            },
            onslideend: function () {
                container.trigger('slideend', arguments)
            },
            onslidecomplete: function () {
                container.trigger('slidecomplete', arguments)
            },
            onclose: function () {
                container.trigger('close')
            },
            onclosed: function () {
                container
                    .trigger('closed')
                    .removeData('gallery_5')
            }
        }
        var options = $.extend(
            // Retrieve custom options from data-attributes
            // on the Gallery widget:
            container.data(),
            {
                container: container[0],
                index: this,
                event: event
            },
            callbacks
        )
        // Select all links with the same data-gallery attribute:
        var links = $('[data-gallery_5="' + id + '"]')
        if (options.filter) {
            links = links.filter(options.filter)
        }
        return new Gallery(links, options)
    });
}));
