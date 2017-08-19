/**
 * Created by Owais on 8/19/2017.
 */

var htmlTemplate = '<input type="*TYPE*" class="*CLASS*" name="*NAME*" id="*ID*" value="*VALUE*">';

var jsTemplate = 'var pattern =  new RegExp("*PATTERN*");\n' +
    'var input = document.getElementById("*ID*").value;\n' +
    'if (!pattern.test(input)){\n' +
    '\tdocument.getElementById("*ID*").appendChild(document.createTextNode("Error!"))\n' +
    '}';
function compile (js, pattern) {
    var htmlCompiled = htmlTemplate.replace(/\*TYPE\*/ , $("#input-generated").attr("type"))
        .replace(/\*CLASS\*/,$("#input-generated").attr("class"))
        .replace(/\*VALUE\*/,$("#input-generated").val())
        .replace(/\*NAME\*/,$("#txt-generator-name").val())
        .replace(/\*ID\*/,$("#txt-generator-id").val());

    var jsCompiled = "";
    if(js === "js"){
        jsCompiled = jsTemplate.replace(/\*ID\*/g,$("#txt-generator-id").val())
            .replace(/\*PATTERN\*/,$("#lbl-pattern").text());
    }

    return [htmlCompiled, jsCompiled];
}