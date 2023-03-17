$('.toggle').click(function () {
    $(this).children('i').toggleClass('ICON');
    $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});
