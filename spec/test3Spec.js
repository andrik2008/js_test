describe("test3 Module", function () {
    it("creates 'window.mc' property and 'window.f' function", function () {
        expect(typeof window.mc).toEqual("undefined");
        expect(typeof window.f).toEqual("undefined");
        Module();
        expect(typeof window.mc).toEqual("object");
        expect(typeof window.f).toEqual("function");
    });

    it("creates 'window.test_func' function", function () {
        expect(typeof window.test_func).toEqual("undefined");
        Module();
        window.f('test_func');
        expect(typeof window.test_func).toEqual("function");
    });

});
