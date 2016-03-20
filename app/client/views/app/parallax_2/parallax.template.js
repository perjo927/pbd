var fireSelector = "#img-fire"; // TODO: class


Template.parallax2.scrollFireContent = function () {
   // Materialize.fadeInImage(fireSelector)
};

Template.parallax2.onRendered(function () {
    var scrollFireOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.parallax2.scrollFireContent()"
        }
    ];
    //Materialize.scrollFire(scrollFireOptions);
    this.$('.parallax').parallax();

});
