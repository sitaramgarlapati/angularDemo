import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Component({
  selector: 'app-observables-pipes',
  templateUrl: './observables-pipes.component.html',
  styleUrls: ['./observables-pipes.component.css']
})
export class ObservablesPipesComponent implements OnInit {

  //Pipe with Map, Filter & Tap
  //Pipe created as an instance method
  obs = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.complete()
  }).pipe(
    tap(data => console.log('tap '+data)),           //tap
    filter(data => data > 2),                        //filter
    tap(data => console.log('filter '+data)),        //tap
    map((val) => { return val as number * 2 }),      //map
    tap(data => console.log('final '+data)),         //tap
  )

  //Pipe created as standalone API
  customPipeOperator = pipe(
    tap(data => console.log('tap '+data)),
    filter(data => data > 2),
    tap(data => console.log('filter '+data)),
    map((val) => {
      return val as number * 2
    }),
    tap(data => console.log('final '+data)),
  );

  obsWithPipe = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.complete()
  }).pipe(
    this.customPipeOperator
  )


  data = [];
  data2 = [];

  ngOnInit() {

    this.obs.subscribe(
      val => {
        this.data.push(val)
        console.log(this.data)
      }
    )

     this.obsWithPipe.subscribe(
      val => {
        this.data2.push(val)
        console.log(this.data)
      }
    )

  }
}
