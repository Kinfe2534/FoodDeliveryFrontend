import { Component, OnInit, Input } from '@angular/core';
import { RestaurantRepository} from '../model/restaurantRepository.model';
import { Restaurant } from '../model/restaurant.model';
import { SharedState } from '../model/sharedState.model';
import { MODES } from '../model/sharedState.model';

@Component({
  selector: 'app-restaurant-thumbnail',
  templateUrl: './restaurant-thumbnail.component.html',
  styleUrls: ['./restaurant-thumbnail.component.css']
})
export class RestaurantThumbnailComponent implements OnInit {

  constructor(public model: RestaurantRepository, private state:SharedState){}
  getRestaurant(key: number): Restaurant {
    return this.model.getRestaurant(key);
}
getProducts(): Restaurant[] {
    return this.model.getRestaurants();
}
removeRestaurant(key: number) {
    this.model.removeRestaurant(key);
}
editRestaurant(key: number) {
    this.state.id = key;
    this.state.mode = MODES.EDIT;
}
addRestaurant() {
    this.state.id = undefined;
    this.state.mode = MODES.CREATE;
}

  

  ngOnInit(): void {
  }

}
