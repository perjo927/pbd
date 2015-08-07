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
    }
});