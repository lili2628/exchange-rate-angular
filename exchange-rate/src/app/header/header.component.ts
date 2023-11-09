import { Component, OnInit} from '@angular/core';

import { RatesRequestService } from '../services/rates-request.service';
import { Currency } from '../interface/currency';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
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
        console.log(response);
        this.response = response;
      },
      error: (error) => console.error(error),
      complete: () => console.log('Done getting currency rates')
    });
  }
  }

