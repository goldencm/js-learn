"use strict";

/** Raise a base number to a exponent
 * @param  {number} base - number must be an integer
 * @param  {number} exp - exponent must be an integer
 * @returns {number} base raised to the exp.
 */
function pow(base, exp) {
    return base ** exp;
}

exports.test = {
    pow: pow,
};
