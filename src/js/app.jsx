import React, { Component } from 'react';
import Mortgage from './lib/Mortgage';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      principal: '',
      interestRate: '',
      loanTerm: '',
      period: 12,
      output: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var principal = this.state.principal;
    var rate = this.state.interestRate;
    var term = this.state.loanTerm;
    var period = this.state.period;

    var mortgage = new Mortgage(principal, rate, term, period);
    var result = mortgage.periodicPayment;
    this.setState({ output: result })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Mortgage Calculator</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input name='principal' type="text" value={this.state.principal} onChange={this.handleChange}/>
              Principal
            </label>
          </div>

          <div>
            <label>
              <input name='interestRate' type="text" value={this.state.interestRate} onChange={this.handleChange}/>
              Interest Rate (%)
            </label>
          </div>

          <div>
            <label>
              <input name="loanTerm" type="text" value={this.state.loanTerm} onChange={this.handleChange}/>
              Loan Term (years)
            </label>
          </div>

          <div>
            <label>
              <select name='period' value={this.state.period} onChange={this.handleChange}>
                <option value='12'>Monthly</option>
                <option value='4'>Quarterly</option>
              </select>
              Period
            </label>
          </div>

          <button type="submit" id='calculate'>Calculate</button>
        </form>

        <p id='output'> ${this.state.output} </p>
      </div>
    );
  }
}
