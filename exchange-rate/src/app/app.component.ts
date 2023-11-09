import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RatesRequestService } from './services/rates-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'exchange-rate';

  constructor(private ratesRequestService: RatesRequestService) {}

  ngOnInit(): void {
      this.onGetRates();
  }

  onGetRates(): void {
    this.ratesRequestService.getRates().subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => console.log('Done getting currency rates')
    });
  }

}
