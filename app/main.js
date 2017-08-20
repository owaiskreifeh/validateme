/**
 * Created by Owais on 8/18/2017.
 */




/*
*Grep RegExp Patterns list from app/json/regex.json
*
* @variable
*
* Anonymous @function
* **{
* **@params none
* **@return json object
* **}
* */
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


/* Validate The input with given Pattern (var pattern)
* @function validate
* @param none
* @return void
* */
function validate() {
    var regex = new RegExp($("#final-pattern").val());

    if (regex.test($("#input-generated").val())){
        $("#lbl-test")
            .removeClass()
            .addClass("text-success")
            .text("PASS :D");
    }else {
        $("#lbl-test")
            .removeClass()
            .addClass("text-danger")
            .text("Fail :(");
    }
}


/*
 * onChange Event for #pre-pattern,
 * Setting the RegExp Pattern to #txt-pattern TextArea
 * @event change
 * @id pre-pattern
 * */
$("#pre-pattern").change(function () {
    var pattern = regexList[$(this).find("option:selected").val()];
    $("#txt-pattern").text(pattern);
});



/*
 * onClick Event for #btn-generate
 * Modify (Test Space) input to given Css Style
 * @event click
 * @id btn-generate
 * */
$("#btn-generate").click(function () {
    var className = $("#css-native").prop("checked")?"":"form-control";
    $("#final-pattern").val($("#txt-pattern").text());
    $("#input-generated")
        .attr("type", $("#input-type").val())
        .attr("class", className)
        .prop('disabled', false);
});


/*
 * onClick Event for #btn-pattern
 * Toggles #final-pattern Input (Show/Hide)
 * @event click
 * @id btn-pattern
 * */
$("#btn-pattern").click(function () {
    $("#final-pattern").toggle();
});


/*
 * onClick Event for #btn-validate
 * invokes @function validate()
 * @event click
 * @id btn-generate
 * */
$("#btn-validate").click(function () {validate()});


/*
 * onKeyup Event for #input-generated
 * invokes @function validate()
 * @event keyup
 * @id input-generated
 * */
$("#input-generated").keyup(function () {validate()});


/*
 * onClick Event for #btn-code-generate
 * invokes @function compile()
 * @event click
 * @id #btn-code-generate
 * */
$("#btn-code-generate").click(function () {
    compile(
        $("#css-native").prop("checked")?"native":"bootstrap"
        ,$("#js-native").prop("checked")?"js":"jquery"
        ,$("#final-pattern").val());

});
