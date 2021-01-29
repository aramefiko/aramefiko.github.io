$(document).ready(function () {
    $('#nganhhoc').on('change', function () {
        if ($(this).val()) {
            $.getJSON('data/' + $(this).val(), function (data) {
                    $('#info').text(data.info);
                    $.each(data.subject, function (key, value) {
                        $('#subject').append('<li>' + value + '</li>');
                    });
                }
            );
        }
    });
});

