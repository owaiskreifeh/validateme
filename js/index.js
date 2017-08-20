/**
 * Created by Owais on 8/20/2017.
 */
$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() === b ? a : b);
    }
});

$("#btn-more-options").click(function () {
    $("#more-options").toggle(1000);
    $("#btn-generate").toggleText("Test Input", "Generate Code");
    $(this).toggleText("More Options", "Less Options");

    $('html, body').animate({
        scrollTop: $("#more-options").offset().top
    }, 1000);

    if ($("#btn-generate").text() !== "Generate Code"){
        $("#code-area").slideUp(1000);
    }
});


$("#btn-generate").click(function () {

    if ($(this).text() === "Generate Code"){
        $("#code-area").slideDown(1000);
        $('html, body').animate({
            scrollTop: $("#code-area").offset().top
        }, 1000);
    }else{
        $('html, body').animate({
            scrollTop: $(".section").offset().top
        }, 1000);
    }



});

new Clipboard('#copy-html', {
    text: function() {
        return $("#txt-code-html").text();
    }
});
new Clipboard('#copy-js', {
    text: function() {
        return $("#txt-code-js").text();
    }
});