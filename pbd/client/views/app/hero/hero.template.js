// TODO: Move to Lib + ES6

var fireSelector = "#ydb-logo";


Template.hero.onRendered(function () {
    Materialize.fadeInImage(fireSelector)

});

Template.hero.events({
    'click .logo-white': function (event, template) {
        Session.set("theme", "black");
    },
    'click .logo-black': function (event, template) {
        Session.set("theme", "white");
    },
    'click #play': function () {
        Session.set("isPlaying", true);
        // TODO: Refactor, namespace
        var iframeElement = document.querySelector('iframe');
        var widget = SC.Widget(iframeElement);
        widget.play();
        $(".toggle").toggleClass("toggle-back");

    },
    'click #stop': function () {
        Session.set("isPlaying", false);
        // TODO: Refactor, namespace
        var iframeElement = document.querySelector('iframe');
        var widget = SC.Widget(iframeElement);
        widget.pause();
        $(".toggle").toggleClass("toggle-back");

    }
});