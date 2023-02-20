$('.error-message').hide();
$(document).ready(function () {
    let inputText;
    function buttonClick() {
        inputText = $('.emailInput').val();
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    function ValidateEmail(mail) {
        if (mail.match(mailformat)) {
            $('.error-message').hide();
            $('.form').removeClass('error-state');
            return (true)

        }
        else {
            $('.error-message').show();
            $('.form').addClass('error-state');
            return (false)
        }
    }

    $('button').on("click", (e) => {
        e.preventDefault();
        buttonClick();
        ValidateEmail(inputText);
    });
});