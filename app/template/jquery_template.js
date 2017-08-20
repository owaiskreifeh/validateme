/**
 * Made with ♥ by Codat
 * Validate Me
 * */
function validate() {
    var value = $("{{ID}}")
        .val()
        .trim();

    var isRequierd = {{REQUIERD}} ;
    var regex = new RegExp(/{{PATTERN}}/);

    if (value === "" && isRequierd){
        $("#error-required").slideDown();
        return false;
    }else if (!regex.test(value)){
        $("#error-mismatch").slideDown();
        return false;
    }else {
        $("#error-required").slideUp();
        $("#error-mismatch").slideUp();
    }
}