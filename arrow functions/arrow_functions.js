"use strict";

let five = () => 5;

let ten = five + 10;

alert(ten);

alert(ten);
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};
