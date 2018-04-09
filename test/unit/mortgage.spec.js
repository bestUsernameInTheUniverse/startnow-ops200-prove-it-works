const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;
    let principal = 420000;
    let interest = 3.75;
    let term = 30;
    let period = 12;

    before(() => {
        mortgage = new Mortgage(principal, interest, term, period);
    });

    it('should have a periodic payment field', () => {
        expect(mortgage.periodicPayment).to.exist;
    });

    it('should return correct periodic payment', () => {
        expect(mortgage.periodicPayment).to.equal(1945.09);
    });

    it('should have a getter for principal', () => {
        expect(mortgage.principal).to.exist;
    });

    it('convert string input for principal to float', () => {
        mortgage.principal = "9000.01";
        expect(mortgage.principal).to.equal(9000.01);
    });
});