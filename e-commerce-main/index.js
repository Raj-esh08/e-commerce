$(document).ready(function () {
    $('.header .nav .nav-link').on('click', function () {
        var selectedButton = $(this).text(),
            activeButton = $(this).parent().parent().find('.active1').text();
        $(this).parent().parent().find('.active1').removeClass('active1');
        $(this).addClass('active1');
        $('.' + activeButton).removeClass('active1')
        $('.' + selectedButton).addClass('active1')
    });
});