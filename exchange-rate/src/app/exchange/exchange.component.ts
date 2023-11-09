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
    console.log("number left",this.numberLeft);
    this.lastChoice = 'left';

    if (this.currencyLeft !== '' && this.currencyRight !== '') {
    this.currencyExchangeLeft(); 
    };
  }

  onKeyTo(event: any) {
    this.numberRight = event.target.value;
    console.log("number right",this.numberRight);
    this.lastChoice = 'right';

    if (this.currencyLeft !== '' && this.currencyRight !== '') {
      this.currencyExchangeRight(); 
    };
  }

  selectCurrencyFrom(event: any){
    this.currencyLeft = event.target.value;
    console.log('value is From', event.target.value);

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
    console.log('value is To', event.target.value);
     
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
    console.log("nLeft",nLeft);
    this.displayExchangeTo = this.currencyExchange(nLeft, this.currencyLeft, this.currencyRight);
    console.log('finish display to', this.displayExchangeTo);
  }

  currencyExchangeRight() {
    const nRight: number = Number(this.numberRight);
    console.log("nRight",nRight);
    this.displayExchangeFrom = this.currencyExchange(nRight, this.currencyRight, this.currencyLeft);
    console.log('finish display from', this.displayExchangeFrom);
  }


  currencyExchange(n: number, currencyFrom: string, currencyTo: string) {
    const rateUSD: number = Number(Number(this.response?.data['EUR']?.value).toFixed(3));
    const rateEUR: number = Number(Number(this.response?.data['EUR']?.value).toFixed(3));
    let displayExchange: number = 0;

    if (currencyFrom === currencyTo) {
      displayExchange = n;
      console.log('=');
    } else if (currencyFrom === 'UAH') {
        switch (currencyTo) {
          case 'USD':
            displayExchange = rateUSD * n;
            console.log("display",displayExchange);
            console.log(this.lastChoice);
            console.log('UAH USD');
            break;
          case 'EUR':
            displayExchange = rateEUR * n;
            console.log("display",displayExchange);
            console.log(this.lastChoice);
            console.log('UAH EUR');
            break;
          default:
            console.log();
        };
      } else if (currencyFrom === 'EUR') {
        switch (currencyTo) {
          case 'UAH':
            displayExchange = n / rateEUR;
            console.log("display",displayExchange);
            console.log(this.lastChoice);
            console.log('EUR UAH');
            break;
          case 'USD':
            displayExchange = (rateUSD * n ) / rateEUR;
            console.log("display",displayExchange);
            console.log(this.lastChoice);
            console.log('EUR USD');
            break;
          default:
            console.log();
        }; 
      } else if (currencyFrom === 'USD') {
        switch (currencyTo) {
          case 'UAH':
            displayExchange = n / rateUSD;
            console.log("display",displayExchange);
            console.log(this.lastChoice);
            console.log('USD UAH');
            break;
          case 'EUR':
            displayExchange = (rateEUR * n ) / rateUSD;
            console.log("display",displayExchange);
            console.log(this.lastChoice);
            console.log('USD EUR');
            break;
          default:
            console.log();
        }; 
      };
    return displayExchange;
  }

}
