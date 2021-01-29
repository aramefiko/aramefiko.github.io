$(document).ready(function () {
    $('#nganhhoc').on('change', function () {
        $.getJSON('data/' + $(this).val(), function (data) {
                $('#info').text(data.info);
                $.each(data.subject, function (value) {
                    $('#subject').append('<li>' + value + '</li>');
                });
            }
        );
    });
});

