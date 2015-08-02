var fireSelector = ".scrollfire" + "." + "cards";


Template.work.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

Template.work.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.work.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(scrollFireOptions);

});


/**/
Template.work_top.events({
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingWorkTitle"),
    "click .edit": App.Template.Session.setHelper("editingWorkTitle", "WorkTitle", App.Template.Jquery.focus)
});


// TODO: doesn't work
/* */
Template.work_img_container.events({
    "click .edit": App.Template.Session.setHelperById("editingWorkImg", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingWorkImg")
});

/* */
Template.work_name_container.events({
    "click .edit": App.Template.Session.setHelperById("editingWorkName", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingWorkName")
});

/* */
Template.work_text_container.events({
    "click .edit": App.Template.Session.setHelperById("editingWorkText", App.Template.Jquery.focus),
    "keypress input": App.Template.Session.toggleAfterKeyPress("editingWorkText")
});
