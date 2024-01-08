import {EventEmitter, Injectable} from "@angular/core";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // activatedEmiter: EventEmitter<boolean> = new EventEmitter<boolean>();
  activatedEmiter: Subject<boolean> = new Subject<boolean>();

}
