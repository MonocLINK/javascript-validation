$(document).ready(function() {

    // Object containing the validation rules
    var myRules = {


    };

    // Object containing the error messages
    var myMessages = {

    };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate({
        submitHandler: runMyProgram(),
        rules: {
            firstName: "required",
            grade: {
                required: "digits",
                min: "5",
                max: "8",
            },
        },
        messages: {
            firstName: "Please enter your firstname",
            grade: "Please enter your correct grade",
        },
    });

    function runMyProgram() {
        var firstname = $("#firstName").val();
        var grade = $("#grade").val();
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        $("#message").text(`You have registered ${firstname} for grade ${grade} camp.`)

    }



});