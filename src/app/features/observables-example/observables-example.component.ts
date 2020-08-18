import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { map, filter, take,debounceTime } from "rxjs/operators";
import { Observable, of, interval, from,fromEvent, pipe } from "rxjs";


@Component({
  selector: 'app-observables-example',
  templateUrl: './observables-example.component.html',
  styleUrls: ['./observables-example.component.css']
})
export class ObservablesExampleComponent implements OnInit {

  @ViewChild('btn', { static: true }) button: ElementRef;

  buttonSubscription

  constructor() { }

  //Creating observable (stream of values) using Observable constructor
  obs = new Observable((observer) => {
    console.log("Observable starts")
      observer.next("1")
      observer.next("2")
      observer.next("3")
      observer.next("4")
      observer.next("5")

      setTimeout(() => { observer.next("6") }, 1000);
      setTimeout(() => { observer.next("7") }, 2000);
      setTimeout(() => { observer.next("8") }, 3000);
      //setTimeout(() => { observer.error("error emitted") }, 3500);    //sending error event. observable stops here
      //setTimeout(() => { observer.complete() }, 3500);   //sending complete event. observable stops here
      setTimeout(() => { observer.next("9") }, 4000);
      setTimeout(() => { observer.next("10") }, 5000);
  })



  ngOnInit(): void {

    //subscribing to observable
    this.obs.subscribe(
      val=> { console.log(val) },
      error => { console.log("error")},
      () => {console.log("Completed")}
    )

    //Operator - interval
    interval(1000)
    .pipe(
      take(3),
      map(v => Date.now())
    )
    .subscribe(value => console.log("Subscriber: " + value));

    //Creating observable using "of" operator (which accepts variable number of params)
    const obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7],"Hello World");
    obsof5.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))

      //creating observable using "from" operator (accepts only one param)
      const obsfrom2 = from('Hello World');
    obsfrom2.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))

  }

  ngAfterViewInit() {
    this.buttonClick();
  }


  buttonClick() {
    //Creating Observable from event & Subscription
    //Operators - FroEvent, debounceTime
    this.buttonSubscription =  fromEvent(this.button.nativeElement, 'click') // also can be 'scroll', 'keyup'
    //Debounce — Wait X time, then give me the last value.
    //Throttle — Give me the first value, then wait X time.
        .pipe(debounceTime(300))
        .subscribe(res => console.log(res));
  }


  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
  }

}
