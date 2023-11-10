import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent  {
  @Input() response!: any;
  
  numberLeft: string = '';
  numberRight: string = '';

  currencyLeft: string = '';
  currencyRight: string = '';

  displayExchangeFrom: number = 0;
  displayExchangeTo: number = 0;

  selectedCurrency: string = '';

  lastChoice: 'left' | 'right' = 'left';

  public selectTypes = [
    { value: 'UAH', display: 'UAH' },
    { value: 'EUR', display: 'EUR' },
    { value: 'USD', display: 'USD' }
  ];

  onKeyFrom(event: any) {
    this.numberLeft = event.target.value;
    this.lastChoice = 'left';

    if (this.currencyLeft !== '' && this.currencyRight !== '') {
    this.currencyExchangeLeft(); 
    };
  }

  onKeyTo(event: any) {
    this.numberRight = event.target.value;
    this.lastChoice = 'right';

    if (this.currencyLeft !== '' && this.currencyRight !== '') {
      this.currencyExchangeRight(); 
    };
  }

  selectCurrencyFrom(event: any){
    this.currencyLeft = event.target.value;

    if (this.currencyLeft !== '' && this.currencyRight !== '') {
      switch (this.lastChoice) {
        case 'left':
          this.currencyExchangeLeft(); 
          break;
        case 'right':
          this.currencyExchangeRight(); 
          break;
        default:
          console.log();
      };
    };
  }

  selectCurrencyTo(event: any){
    this.currencyRight = event.target.value;
     
    if (this.currencyLeft !== '' && this.currencyRight !== '') {
      switch (this.lastChoice) {
        case 'left':
          this.currencyExchangeLeft(); 
          break;
        case 'right':
          this.currencyExchangeRight(); 
          break;
        default:
          console.log();
      };
    };
  }

  currencyExchangeLeft() {
    const nLeft: number = Number(this.numberLeft);
    this.displayExchangeTo = this.currencyExchange(nLeft, this.currencyLeft, this.currencyRight)
  }

  currencyExchangeRight() {
    const nRight: number = Number(this.numberRight);
    this.displayExchangeFrom = this.currencyExchange(nRight, this.currencyRight, this.currencyLeft);
  }


  currencyExchange(n: number, currencyFrom: string, currencyTo: string) {
    const rateUSD: number = Number(Number(this.response?.data['EUR']?.value).toFixed(3));
    const rateEUR: number = Number(Number(this.response?.data['EUR']?.value).toFixed(3));
    let displayExchange: number = 0;

    if (currencyFrom === currencyTo) {
      displayExchange = n;
    } else if (currencyFrom === 'UAH') {
        switch (currencyTo) {
          case 'USD':
            displayExchange = rateUSD * n;
            break;
          case 'EUR':
            displayExchange = rateEUR * n;
            break;
          default:
            console.log();
        };
      } else if (currencyFrom === 'EUR') {
        switch (currencyTo) {
          case 'UAH':
            displayExchange = n / rateEUR;
            break;
          case 'USD':
            displayExchange = (rateUSD * n ) / rateEUR;
            break;
          default:
            console.log();
        }; 
      } else if (currencyFrom === 'USD') {
        switch (currencyTo) {
          case 'UAH':
            displayExchange = n / rateUSD;
            break;
          case 'EUR':
            displayExchange = (rateEUR * n ) / rateUSD;
            break;
          default:
            console.log();
        }; 
      };
    return displayExchange;
  }

}
