/**
NKMyNumber.js

Copyright (c) 2015 nkuma https://github.com/nkuma
github: https://github.com/nkuma/NKMyNumber-js

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
var NKMyNumber = {};
NKMyNumber.isMyNumber = function(str) {
    //check data type
    if (!typeof str === "string") {
        return false;
    }
    //check length
    if (!str.match(/^[0-9]{12}$/)) {
        return false;
    }
    //check digit
    var sum = 0;
    for (var i = 1; i < 12; i++) {
        if (i >= 7) {
            sum += str.substr(11 - i, 1) * (i - 5);
        } else {
            sum += str.substr(11 - i, 1) * (i + 1);
        }
    }
    if (str.substr(11, 1) != (sum % 11 <= 1 ? 0 : 11 - sum % 11)) {
        return false;
    }
    return true;
};
NKMyNumber.searchMyNumbers = function(str) {
    //check data type
    if (!typeof str === "string") {
        return null;
    }
    //search myNumbers
    var arr = str.match(/[^0-9]+[0-9]{12}[^0-9]+|^[0-9]{12}$/gm);
    if(!arr){
       return null;
    }
    var myNumbers = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (arr[i].match(/[0-9]{12}/))[0];
        if (this.isMyNumber(arr[i])) {
            myNumbers.push(arr[i]);
        }
    }
    //result
    if (myNumbers.length > 0) {
        return myNumbers;
    }
    return null;
};
