var menuOpen = false;
var mobile = false;

function closeMenu() {
    menuOpen = false;
    $('#menu-container').slideUp('slow', function() {});
}

function openMenu() {
    menuOpen = true;
    $('#menu-container').slideDown('slow', function() {});
}

function setup() {
    if(window.innerWidth < 992) {
        mobile = true;
    }

    $('.scrollLink').click(function(e) {
        e.preventDefault();
        var navHeight = $('#navbar')[0].offsetHeight;
        var menuContainerHeight = $('#menu-container')[0].offsetHeight;

        var id = this.href.split('#')[1];
        var position = $('#'+id)[0].offsetTop - navHeight;
        if(mobile) {
            position += menuContainerHeight;
        }

        $('html,body').animate({
            scrollTop: position
        },
        'slow');

        if(menuOpen) {
            closeMenu();
        }
    });

    $('#menu-btn').click(function(e) {
        e.preventDefault();
        if(menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    $(document).ready(function(e) {
        $('#loading')[0].style.display = "none";
        $('#content')[0].style.display = "block";
    });
}

setup();
