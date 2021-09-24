describe("pow", function () {
    describe("raises x to power 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 100; x++) {
            makeTest(x);
        }
    });

    it("2 raised to the 3 power is 8", function () {
        assert.equal(pow(2, 3), 8);
    });

    it("4 raised to the 2 power is 16", function () {
        assert.equal(pow(4, 2), 16);
    });

    it("12 raised to the 2 power is 144", function () {
        assert.equal(pow(12, 2), 144);
    });

    it("1 raised to the 0 power is 1", function () {
        assert.equal(pow(1, 0), 1);
    });
});
