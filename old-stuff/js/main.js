$(function() {
	 
	 "use strict";
	 
    // Sven Teaser Plugin initiation
    $(".sven-container").svenPlugin({
    	preloadMethod: 'tag',
        controls: true,
        showAnimationSummary: false
    });

    // email subscription mailChimp(PHP + AJAX)
    $("#subscription input[type='submit']").on('click submit', function(event) {
        var formData = $("#subscription").serialize();
        var $inputBoxes = $('input', this);
        $inputBoxes.prop('disabled', true);
        $('.subscribe-label').css("visibility", "hidden");
        $('.subscribe-label').css("visibility", "visible").html('<i class="fa fa-hourglass-start"></i>adding your email...');
        var url = "php/subscribe.php";
        $.ajax({
            type: "POST",
            url: url,
            data: formData, // serializes the form's elements.
            dataType: 'json',
            success: function(data) {
                if (data.error) {
                    $('.subscribe-label').css("visibility", "hidden");
                    $('.subscribe-label').css("visibility", "visible").html('<i class="fa fa-times"></i>' + data.message);
                    $inputBoxes.prop('disabled', false);
                } else {
                    $('.subscribe-label').css("visibility", "hidden");
                    $('.subscribe-label').css("visibility", "visible").html('<i class="fa fa-check"></i>' + data.message);
                }
            },
            error: function() {
                $('.subscribe-label').css("visibility", "hidden");
                $('.subscribe-label').css("visibility", "visible").html('<i class="fa fa-times"></i>Problem connecting to server. Please try again');
                $inputBoxes.prop('disabled', false);
            }
        });
        event.preventDefault();
    });
});



