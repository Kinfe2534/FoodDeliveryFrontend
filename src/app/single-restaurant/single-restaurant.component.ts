import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant.model'


@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.css']
})
export class SingleRestaurantComponent implements OnInit {
  @Input() data: Restaurant;
  constructor() { }

  ngOnInit(): void {
  }

}
