import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.observableSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    const customObservable = Observable.create(observer => {
      let count: number = 0;
      setInterval((): void => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error(`already 3!`));
        }
        count++
      }, 1000);
    })

    this.observableSubscription = customObservable.pipe(filter((data: number): boolean => {
      return data > 0;
    }),map((data: number): string => {
      return `Round: ${data + 1}`;
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, (): void => {
      console.log('completed');
    })
  }

  ngOnDestroy(): void {
    this.observableSubscription.unsubscribe();
  }

}
