import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Customer} from './customer.model';

@Component({
  selector: 'app-templatedrivencustomer',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
  customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }
  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

}
