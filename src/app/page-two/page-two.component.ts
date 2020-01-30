import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  @Input() values: any;
  myCartItems = [];
  constructor(private sharedService: SharedService) {

    this.sharedService.mycart.subscribe((item) => {
      console.log(item);
      this.myCartItems.push(item);
    });
  }

  ngOnChanges() {
    console.log('Comp 2:' + this.values);
  }
  removeItem(item) {
    const index = this.myCartItems.indexOf(item);
    this.myCartItems.splice(index);
  }


}