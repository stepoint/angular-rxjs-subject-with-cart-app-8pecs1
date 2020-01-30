import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  productsList = ['Apple', 'Orange', 'Banana'];
  @Output() comp1Out = new EventEmitter();
  constructor(private sharedService: SharedService) {

  }

  ngOnInit() {
  }

  addToCart(product) {
    this.sharedService.mycart.next(product);
    this.comp1Out.emit(product);
  }


}