import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';
import { RestaurantRepository} from '../model/restaurantRepository.model';


@Component({
  selector: 'app-restaurant-thumbnail',
  templateUrl: './restaurant-thumbnail.component.html',
  styleUrls: ['./restaurant-thumbnail.component.css']
})
export class RestaurantThumbnailComponent implements OnInit {

  constructor(public model: RestaurantRepository){}
  

  ngOnInit(): void {
  }

}
