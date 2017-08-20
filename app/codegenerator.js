/**
 * Created by Owais on 8/19/2017.
 */

//HTML Elements
var inputGenerated = $("#input-generated");
var txtGeneratorName = $("#txt-generator-name");
var txtGeneratorId = $("#txt-generator-id");
var txtGeneratorLabel = $("#txt-generator-label");
var txtGeneratorErrorRequired = $("#txt-generator-err-req");
var txtGeneratorErrorMismatch = $("#txt-generator-err-mism");
var jsLib = "";

/*
 * Loads Template file form app/template/ directory
 *
 * @function loadTemplate
 * @param fileName:String
 * @return String
 *
 * Anonymous function
 * **{
 * **@param none
 * **@return String
 * **}
 * */
function loadTemplate(fileName) {
    return (function () {
        var txt = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "app/template/" + fileName,
            'dataType': "text",
            'success': function (data) {
                txt = data;
            }
        });
        return txt;
    })();
}


/*
 * Compiles given HTML template
 *
 * @function compileHTML
 * @param template:String template file name with no extension
 * @return String compiled html string
 * */
function compileHTML(template) {
    var inCompiled = loadTemplate(template + ".html");
    return inCompiled
        .replace(/{{TYPE}}/, inputGenerated.attr("type"))
        .replace(/{{VALUE}}/, inputGenerated.val())
        .replace(/{{NAME}}/, txtGeneratorName.val())
        .replace(/{{ID}}/g, txtGeneratorId.val())
        .replace(/{{ERROR_REQUIRED}}/, txtGeneratorErrorRequired.val())
        .replace(/{{ERROR_MISMATCH}}/, txtGeneratorErrorMismatch.val())
        .replace(/{{LABEL}}/, txtGeneratorLabel.text())
        .replace(/{{REQUIERD}}/, $("#required").is(":checked") ? "required" : "")
        .replace(/{{JQUERY}}/, jsLib === "jquery"
            ? "<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>"
            : "");
}

/*

 * Compiles given JS template
 *
 * @function compileJS
 * @param template:String template file name with no extension
 * @return String compiled js string
 * */
function compileJS(template) {
    var inCompiled = loadTemplate(template + ".js");
    return inCompiled
        .replace(/{{REQUIERD}}/, $("#required").is(":checked"))
        .replace(/{{PATTERN}}/, $("#final-pattern").val())
        .replace(/{{NAME}}/, txtGeneratorName.val())
        .replace(/{{ID}}/, txtGeneratorId.val());
}


/*
 * Invokes compileHTML(String) and compileJS(String) with given options
 * @function compile
 * @param css:String css framework
 * @param js:String js library
 * @return void
 * */
function compile(css, js) {
    jsLib = js;
    $("#txt-code-html").text(css === "bootstrap"
        ? compileHTML("bootstrap_template")
        : compileHTML("plan_template"));
    $("#txt-code-js").text(js === "jquery"
        ? compileJS("jquery_template")
        : compileJS("plan_template"));


}