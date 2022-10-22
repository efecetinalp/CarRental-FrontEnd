import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  myScriptElement : HTMLScriptElement;
  constructor() {
      this.myScriptElement = document.createElement("script")
      this.myScriptElement.src = "src/assets/js/script.js"
      document.body.appendChild(this.myScriptElement);
   }

  ngOnInit(): void {
  }

}
