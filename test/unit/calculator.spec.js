const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
    let calculator = null;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should have an add function', () => {
        expect(calculator.add).to.exist;
    });

    it('should add 40 + 2 together correctly', () => {
        expect(calculator.add(40,2)).to.equal(42);
    });

    it('should have a subtract function', () => {
        expect(calculator.subtract).to.exist;
    });

    it('should subtract 44 - 2 together correctly', () => {
        expect(calculator.subtract(44,2)).to.equal(42);
    });

    it('should have a multiply function', () => {
        expect(calculator.multiply).to.exist;
    });

    it('should multiply 21 * 2 together correctly', () => {
        expect(calculator.multiply(21,2)).to.equal(42);
    });

    it('should have a divide function', () => {
        expect(calculator.divide).to.exist;
    });

    it('should multiply 84 / 2 together correctly', () => {
        expect(calculator.divide(84,2)).to.equal(42);
    });
});