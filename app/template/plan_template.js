/**
 * Made with ♥ by Codat
 * Validate Me
 * */
function validate() {
    var x = document.forms["form"]["{{NAME}}"].value;
    var regex = new RegExp(/{{PATTERN}}/);
    var isRequierd = {{REQUIERD}} ;

    x = x.trim();

    if (x === "" && isRequierd){
        document.getElementById("error-required").style.display = "block";
        return false;
    }else if (!regex.test(x)){
        document.getElementById("error-mismatch").style.display = "block";
        return false;
    }

}