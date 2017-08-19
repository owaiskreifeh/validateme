/**
 * Created by Owais on 8/18/2017.
 */

var regexList = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "app/json/regex.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

$("#pre-pattern").change(function () {
    var pattern = regexList[$(this).find("option:selected").val()];
    $("#txt-pattern").text(pattern);
});

$("#btn-generate").click(function () {
    var className = $("#css-native").prop("checked")?"":"form-control";
    $("#lbl-pattern").text($("#txt-pattern").text());
    var inputType = $("#input-type").val();
    $("#input-generated").attr("type", inputType)
        .attr("class", className)
        .prop('disabled', false);


});

$("#btn-pattern").click(function () {
    $("#lbl-pattern").toggle();
});


function validate() {
    var input = $("#input-generated").val();
    var regex = new RegExp($("#lbl-pattern").text());

    if (regex.test(input)){
        $("#lbl-test").removeClass()
            .addClass("text-success")
            .text("PASS :D");
    }else {
        $("#lbl-test").removeClass()
            .addClass("text-danger")
            .text("Fail :(");
    }
}

$("#btn-validate").click(function () {validate()});
$("#input-generated").keyup(function () {validate()});


$("#btn-code-generate").click(function () {
    var code = compile(
        $("#js-native").prop("checked")?"js":"jquery"
        ,$("#lbl-pattern").text());

    $("#txt-code-html").text(code[0]);
    $("#txt-code-js").text(code[1]);
});