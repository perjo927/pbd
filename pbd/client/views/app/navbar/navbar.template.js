Template.navbar.onRendered( function() {
    this.$('.button-collapse').sideNav();
    this.$(".dropdown-button").dropdown();
});

/* */
Template.navbar.events({
    "click #sign-out": function (event,template) {
        Meteor.logout();
        Materialize.toast("Du &auml;r nu utloggad.", 5000, 'black');
    },
    'click .black-text': function (event, template) {
        Session.set("theme", "white");
    },
    'click .white-text': function (event, template) {
        Session.set("theme", "black");
    },
    'click .toggle': function () {
        Session.set("isPlaying", true);
        // TODO: Refactor, namespace
        var iframeElement = document.querySelector('iframe');
        var widget = SC.Widget(iframeElement);
        widget.toggle();
        $(".toggle").toggleClass("toggle-back");
    },
    'click .toggle-back': function () {
        Session.set("isPlaying", false);
    }
});


/**/
Template.nav_items.events({
    "click .edit": App.Template.Session.setDesignatedCollectionPropertyFromClickName("editingNavbar", "text", App.Template.Jquery.focus)
});

/**/
Template.nav_container.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingNavbar")
});

Template.nav_container.helpers({
    "affectedProperty": App.Template.Session.getHelper("editingNavbar")
});

