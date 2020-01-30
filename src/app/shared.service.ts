import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SharedService {

  mycart = new Subject<string>();

  constructor() { }

}