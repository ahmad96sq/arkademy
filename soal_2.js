var huruf_kecil = /[a-z]/g;
var special = /[/_.!]/g;
var number = /[0-9]/g;
var huruf = /[A-Za-z]/g;

function usernameValidity(username) {
    // engecek huruf
    if (username.length >= 5 || username.length <= 12 &&
        username.match(huruf_kecil) &&
        username.match("_")
    ) {
        // console.log('OK');
        return true;
    }
}

function passwordValidity(pass) {
    if (pass.length >= 7 &&
        pass.match(special).length == 1 &&
        pass.match(number).length == 1 &&
        pass.match(huruf).length == 5
    ) {
        // console.log('OK');
        return true;
    }
}

usernameValidity("friska_putri"); // true
usernameValidity("Friska-putri"); // false
passwordValidity("1WORLD!"); // false