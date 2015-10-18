jQuery(function($) {

    $('*').each(function() {
        var win = document.defaultView || window;
        var el = $(this).get(0);
        var style = win.getComputedStyle(el, '');
        var fontFamily = style['font-family'];
        if (!fontFamily) return;
        if (fontFamily.indexOf('FontAwesome') > -1 || fontFamily.indexOf('open-dyslexic') > -1 ) return;
        el.style.fontFamily = 'open-dyslexic';
    });

});