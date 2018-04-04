module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this._principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
    get monthlyPayment() {
        const P = parseFloat(this.principal);
        const r = parseFloat(this.interest)/100/ parseInt(this.period);
        const n = parseInt(this.term) * parseInt(this.period);

        const M = P * (r * ((1 + r) ** n)) / (((1 + r) ** n) - 1)

        return Math.ceil(M * 100) / 100;
    }

    get principal() { 
        return this._principal; 
    }
    set principal(val) {
        this._principal = parseFloat(val);
    }
  }