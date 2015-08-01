Template.footer.events({
    "submit form": function (event, template) {
        event.preventDefault();

        console.debug("Send");
        // TODO: App parse

        // TODO: Email.send(), assets

        var errorMessage = "Email hasn't been sent successfully.";
        var successMessage = "Email has been sent successfully.";

        var email = "email",
            message = "textmessage",
            subject = " has sent you a message from the contact form at ydb.com. ";

        var callback = function(err, res) {
            console.info(err, res);

            if (!!err) {
                Materialize.toast(errorMessage, 5000, 'red');
            } else {
                Materialize.toast(successMessage, 5000, 'black');

            }
        };
        Meteor.call('sendEmail', email, message, subject, callback);
    }
});



/*
Template.contact_form.events({
    'submit form': function(event, template) {
        event.preventDefault();

        var formContainer = Contact.parseForm(event);

        // Validation in case HTML5 validation fails
        var formFields = [
            {
                name: "fullname",
                method: Contact.validateFullName
            },
            {
                name: "email",
                method: Contact.validateEmail
            },
            {
                name: "textmessage",
                method: Contact.validateTextArea
            }
        ];

        Contact.validateForm(formFields, formContainer, function (isValid, error) {
            var errorMessage =
                "The input was faulty from the following fields: "
                + error
                + ". Please try again.";

            Contact.onValidationDone(isValid, errorMessage, formContainer);
        });
    }
});


 */