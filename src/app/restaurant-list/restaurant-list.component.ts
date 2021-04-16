import { Component, OnInit } from '@angular/core';
import { RestaurantRepository} from '../model/restaurantRepository.model';
import { Restaurant } from '../model/restaurant.model';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
 
 newRestaurant: Restaurant=new Restaurant(); 
  constructor(public model: RestaurantRepository) {
  
  }

  ngOnInit(): void {
  }

}
