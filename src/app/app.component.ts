import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmiter.subscribe((didActivated: boolean): void => {
      this.userActivated = didActivated;
    })
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
