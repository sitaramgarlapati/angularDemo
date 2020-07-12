import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

export enum Color {Red, Green, Blue}

@Component({
  selector: 'app-comp-templates',
  templateUrl: './comp-templates.component.html',
  styleUrls: ['./comp-templates.component.css']
})
export class CompTemplatesComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }

}
