/**
 * Created by Owais on 8/18/2017.
 */


function validator(input, pattern) {
    var regex = new RegExp(pattern);
    if (regex.test(input)){
        $("#res-text").text("").append("<h4 class='text-primary'>Validation Result :</h4>" +
            "<h1 class='text-success'>PASS</h1> ");

    }else {
        $("#res-text").text("").append("<h4 class='text-primary'>Validation Result :</h4>" +
            "<h1 class='text-danger'>FAIL</h1>");


    }
}