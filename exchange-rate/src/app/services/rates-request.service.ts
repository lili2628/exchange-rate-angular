import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../interface/currency';

@Injectable({
  providedIn: 'root'
})
export class RatesRequestService {

  constructor(private http: HttpClient) {}

  getRates(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`https://api.currencyapi.com/v3/latest?apikey=cur_live_A71r5EE7KNPps1K7HMAVkceamqgPLWMqRZD6HVzA&base_currency=UAH`);
  }

}
