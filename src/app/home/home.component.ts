import {Component, OnDestroy, OnInit} from '@angular/core';
import { interval, Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.observableSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })
  }

  ngOnDestroy(): void {
    this.observableSubscription.unsubscribe();
  }

}
