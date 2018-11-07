/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");
require("./underscore.min");
require("./jquery.easing.min");
require("./scrolling-nav");
const WOW = require("wowjs");
require("jquery-ui-dist/jquery-ui.min");
require("@fortawesome/fontawesome-free/js/all.min");

$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});
