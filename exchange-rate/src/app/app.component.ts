import { Component} from '@angular/core';

import { RatesRequestService } from './services/rates-request.service';
import { Currency } from './interface/currency';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'exchange-rate';

  response: Currency = {
    meta: {
      last_updated_at: '',
    },
    data: {}
  };

  constructor(private ratesRequestService: RatesRequestService) {}

  ngOnInit(): void {
      this.onGetRates();
  }

  onGetRates(): void {
    this.ratesRequestService.getRates().subscribe({
      next: (response: any) => {
        this.response = response;
      },
      error: (error: any) => console.error(error),
      complete: () => console.log('Done getting currency rates')
    });
  }

}
