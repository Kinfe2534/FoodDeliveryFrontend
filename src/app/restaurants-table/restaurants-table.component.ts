import { Component, OnInit } from '@angular/core';
import { RestaurantRepository} from '../model/restaurantRepository.model';
import { Restaurant } from '../model/restaurant.model';

@Component({
  selector: 'app-restaurants-table',
  templateUrl: './restaurants-table.component.html',
  styleUrls: ['./restaurants-table.component.css']
})
export class RestaurantsTableComponent implements OnInit {


  constructor(public model: RestaurantRepository){}

  ngOnInit(): void {
  }

}
