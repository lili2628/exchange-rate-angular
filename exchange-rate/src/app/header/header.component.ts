import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RatesRequestService } from '../services/rates-request.service';
import { Currency } from '../interface/currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {


  constructor() {

    }
  }

