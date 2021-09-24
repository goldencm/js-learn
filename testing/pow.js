"use strict";

/** Raise a base number to a exponent
 * @param  {} base - number must be an integer
 * @param  {} exp - exponent must be an integer
 */
function pow(base, exp) {
    return base ** exp;
}

exports.test = {
    pow: pow,
};
