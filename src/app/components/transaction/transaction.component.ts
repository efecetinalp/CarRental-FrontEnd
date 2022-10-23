import { Component, OnInit } from '@angular/core';

declare function input_credit_card(any:any):any;
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    input_credit_card(document.getElementById('credit-card'));
  }
}