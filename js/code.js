function setup() {
    $('.scrollLink').click(function(e) {
        e.preventDefault();
        var navHeight = $('#navbar')[0].offsetHeight;

        var id = this.href.split('#')[1];
        var position = $('#'+id)[0].offsetTop - navHeight;

        $('html,body').animate({
            scrollTop: position
        },
        'slow');
    });
}

setup();
