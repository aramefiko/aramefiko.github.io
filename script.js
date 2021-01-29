$(document).ready(function () {
    $('#nganhhoc').on('change', function () {
        $.getJSON('data/' + $(this).val(), function (data) {
                console.log(data);
            }
        );
    });
});

