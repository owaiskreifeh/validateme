/**
 * Made with ♥ by Codat
 * Validate Me
 * */
function validate() {
    var x = document.forms["form"]["{{NAME}}"].value;
    x = x.trim();
    var isRequierd = {{REQUIERD}} ;

    if (x === "" && isRequierd){
        document.getElementById("error-required").style.display = "";
        return false;
    }

    var regex = new RegExp(/{{PATTERN}}/);
    if (!regex.test(x)){
        document.getElementById("error-mismatch").style.display = "";
        return false;
    }
}