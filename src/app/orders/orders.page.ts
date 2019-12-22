import { Component, OnInit } from '@angular/core';
import { setState, getState } from  'ts-state'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders:any
  constructor() { }

  ngOnInit() {
    
   // console.log(getState()['bookBrought']);
    this.orders=getState()['bookBrought']
  }

}
