$('#nganhhoc').on('change', (e) => {
    $.getJSON('data/' + $(this).val(), (data) => {
        console.log(data);
    });
});
